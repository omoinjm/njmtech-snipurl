import { NextRequest, NextResponse } from 'next/server';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.includes('Environment variable not found: DATABASE_URL')) {
    return 'Server database is not configured. Set DATABASE_URL in production.';
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Unexpected server error';
}

export function getBaseUrl(request: NextRequest): string {
  return process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') ?? request.nextUrl.origin;
}

export function createErrorResponse(error: unknown, context: string) {
  console.error(context, error);

  return NextResponse.json(
    { error: getErrorMessage(error) },
    { status: 500 }
  );
}
