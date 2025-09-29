export type ComparisonOperator = 'equal' | 'less' | 'greater';

export function filterBy<T>(
  array: T[],
  key: keyof T,
  threshold: number,
  operator: ComparisonOperator,
): T[] {
  if (typeof threshold !== 'number' || isNaN(threshold)) {
    console.warn(
      'Reference of value (threshold) invalid. Return array original.',
    );
    return array;
  }

  return array.filter((item) => {
    const value = item[key];

    if (
      typeof value !== 'number' ||
      isNaN(value) ||
      value === null ||
      value === undefined
    ) {
      return false;
    }

    switch (operator) {
      case 'less':
        return value < threshold;
      case 'equal':
        return value === threshold;
      case 'greater':
        return value > threshold;
      default:
        return false;
    }
  });
}
