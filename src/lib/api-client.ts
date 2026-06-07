type ErrorShape = {
  error?: string;
};

export async function parseJsonResponse<T>(response: Response): Promise<T | null> {
  const contentType = response.headers.get('content-type') ?? '';
  const body = await response.text();

  if (!body.trim()) {
    return null;
  }

  try {
    return JSON.parse(body) as T;
  } catch (err) {
    const snippet = body.length > 50 ? `${body.slice(0, 50)}...` : body;
    const typeInfo = contentType ? ` (Content-Type: ${contentType})` : '';
    throw new Error(`The server returned an invalid response (Status: ${response.status})${typeInfo}: "${snippet}"`);
  }
}

export function getApiErrorMessage(
  error: unknown,
  fallback = 'Something went wrong'
): string {
  if (
    typeof error === 'object' &&
    error !== null &&
    'error' in error &&
    typeof (error as ErrorShape).error === 'string'
  ) {
    return (error as ErrorShape).error as string;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}
