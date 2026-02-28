export function extractHashtags(caption: string): string[] {
  const matches = caption.match(/#(\w+)/g) ?? [];
  const result: string[] = [];
  for (const tag of matches) {
    result.push(tag.replace('#', '').toLowerCase());
  }
  return result;
}

export function inferKeywords(caption: string): string[] {
  const words = caption
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
  return Array.from(new Set(words)).slice(0, 8);
}
