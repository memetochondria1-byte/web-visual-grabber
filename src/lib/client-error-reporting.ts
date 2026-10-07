type ErrorContext = Record<string, unknown>;

/**
 * Logs a client-side error from a React error boundary. Server-side errors are
 * captured separately in src/lib/error-capture.ts.
 */
export function reportClientError(error: unknown, context: ErrorContext = {}) {
  console.error("[client-error]", context, error);
}
