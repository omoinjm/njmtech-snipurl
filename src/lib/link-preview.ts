export type LinkPreview = {
  title: string;
  description: string | null;
  favicon_url: string | null;
  site_name: string;
  domain: string;
};

const REQUEST_HEADERS = {
  accept: 'text/html,application/xhtml+xml',
  'user-agent':
    'Mozilla/5.0 (compatible; SnipURL/1.0; +https://snipurl.app)',
};

const ENTITY_MAP: Record<string, string> = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
};

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function decodeHtmlEntities(value: string) {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (_, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      const codePoint = Number.parseInt(entity.slice(2), 16);
      return Number.isNaN(codePoint) ? _ : String.fromCodePoint(codePoint);
    }

    if (entity.startsWith('#')) {
      const codePoint = Number.parseInt(entity.slice(1), 10);
      return Number.isNaN(codePoint) ? _ : String.fromCodePoint(codePoint);
    }

    return ENTITY_MAP[entity] ?? _;
  });
}

function sanitizeText(value: string | null | undefined) {
  if (!value) {
    return null;
  }

  const decoded = decodeHtmlEntities(value.replace(/<[^>]*>/g, ' '));
  const normalized = normalizeWhitespace(decoded);

  return normalized || null;
}

function parseAttributes(tag: string) {
  const attributes: Record<string, string> = {};
  const attributeRegex =
    /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;

  for (const match of tag.matchAll(attributeRegex)) {
    const [, key, doubleQuoted, singleQuoted, unquoted] = match;
    attributes[key.toLowerCase()] = doubleQuoted ?? singleQuoted ?? unquoted ?? '';
  }

  return attributes;
}

function getMetaContent(html: string, keys: string[]) {
  const metaTags = html.match(/<meta\s+[^>]*>/gi) ?? [];

  for (const tag of metaTags) {
    const attributes = parseAttributes(tag);
    const name = attributes.name?.toLowerCase();
    const property = attributes.property?.toLowerCase();
    const content = sanitizeText(attributes.content);

    if (!content) {
      continue;
    }

    if ((name && keys.includes(name)) || (property && keys.includes(property))) {
      return content;
    }
  }

  return null;
}

function getTitle(html: string) {
  const ogTitle = getMetaContent(html, ['og:title', 'twitter:title']);

  if (ogTitle) {
    return ogTitle;
  }

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return sanitizeText(titleMatch?.[1]) ?? null;
}

function getFaviconUrl(html: string, baseUrl: string) {
  const linkTags = html.match(/<link\s+[^>]*>/gi) ?? [];

  for (const tag of linkTags) {
    const attributes = parseAttributes(tag);
    const rel = attributes.rel?.toLowerCase() ?? '';
    const href = attributes.href;

    if (!href || !rel.includes('icon')) {
      continue;
    }

    try {
      return new URL(href, baseUrl).toString();
    } catch {
      return null;
    }
  }

  try {
    return new URL('/favicon.ico', baseUrl).toString();
  } catch {
    return null;
  }
}

export async function getLinkPreview(url: string): Promise<LinkPreview> {
  const targetUrl = new URL(url);
  const domain = targetUrl.hostname.replace(/^www\./, '');
  const fallbackTitle = domain;

  const response = await fetch(targetUrl.toString(), {
    headers: REQUEST_HEADERS,
    signal: AbortSignal.timeout(5000),
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!response.ok) {
    throw new Error(`Preview request failed with status ${response.status}`);
  }

  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('text/html')) {
    return {
      title: fallbackTitle,
      description: null,
      favicon_url: getFaviconUrl('', targetUrl.origin),
      site_name: domain,
      domain,
    };
  }

  const html = await response.text();
  const siteName =
    getMetaContent(html, ['og:site_name', 'application-name']) ?? domain;
  const title = getTitle(html) ?? fallbackTitle;
  const description = getMetaContent(html, [
    'og:description',
    'twitter:description',
    'description',
  ]);

  return {
    title,
    description,
    favicon_url: getFaviconUrl(html, targetUrl.origin),
    site_name: siteName,
    domain,
  };
}
