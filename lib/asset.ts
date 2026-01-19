export function asset(path: string): string {
  // Just return the path as-is. 
  // If you passed "media/img.png", ensure it starts with "/"
  return path.startsWith('/') ? path : `/${path}`;
}