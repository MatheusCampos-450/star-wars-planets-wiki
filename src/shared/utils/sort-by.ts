export type SortOrder = 'ascendent' | 'descendent';

export function sortBy<T>(
  array: T[],
  key: keyof T,
  order: SortOrder = 'ascendent',
): T[] {
  return [...array].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (valueA === null || valueA === undefined) return 1;
    if (valueB === null || valueB === undefined) return -1;

    let comparison = 0;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      comparison = valueA.localeCompare(valueB, undefined, {
        sensitivity: 'base',
      });
    } else if (typeof valueA === 'number' && typeof valueB === 'number') {
      comparison = valueA - valueB;
    } else if (valueA instanceof Date && valueB instanceof Date) {
      comparison = valueA.getTime() - valueB.getTime();
    } else {
      const strA = String(valueA);
      const strB = String(valueB);
      comparison = strA.localeCompare(strB, undefined, { sensitivity: 'base' });
    }

    return order === 'ascendent' ? comparison : comparison * -1;
  });
}
