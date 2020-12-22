import { escapeRegExp } from './escape-regexp.function';

export function search(haystack: string, needle: string): boolean {
  const regex = new RegExp(`.*${escapeRegExp(needle)}.*`, 'gi');

  return regex.test(haystack);
}
