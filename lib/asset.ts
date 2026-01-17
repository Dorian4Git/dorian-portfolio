export function asset(path: string) {
  // ⚠️ IMPORTANT: Change this to your exact GitHub repository name.
  // Example: if your repo is "portfolio-2024", write "/portfolio-2024"
  // If you have a custom domain (www.dorian.com), leave this empty ("").
  const repoName = "/YOUR-REPO-NAME"; 
  
  // Check if we are running on the server (production) or locally
  const isProd = process.env.NODE_ENV === "production";

  // If in production, prepend the repo name. Otherwise, use path as is.
  return isProd ? `${repoName}${path}` : path;
}