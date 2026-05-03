export function getApiBaseUrl(): string {
  return process.env.API_URL ?? 'http://localhost:3001';
}
