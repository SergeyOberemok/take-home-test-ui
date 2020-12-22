export interface Searchable<T> {
  isSatisfied(predicate: (value: T) => boolean): boolean;
}
