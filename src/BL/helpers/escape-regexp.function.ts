export function escapeRegExp(pattern: string) {
  return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
