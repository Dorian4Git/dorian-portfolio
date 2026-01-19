export function asset(path: string): string {
  // Ensure the path starts with a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Grab the base path we set in next.config.ts
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Combine them
  return `${basePath}${cleanPath}`;
}