type Entry = { count: number; resetAt: number };

const bucket = new Map<string, Entry>();

export function checkRateLimit(key: string, max = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const current = bucket.get(key);
  if (!current || now > current.resetAt) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= max) {
    return false;
  }
  current.count += 1;
  bucket.set(key, current);
  return true;
}
