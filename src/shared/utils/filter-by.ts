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
    const value = Number(item[key]);

    console.log(Number(value));

    if (isNaN(value) || value === null || value === undefined) {
      return false;
    }

    console.log(Number(value));

    switch (operator) {
      case 'less':
        return Number(value) < threshold;
      case 'equal':
        return Number(value) === threshold;
      case 'greater':
        return Number(value) > threshold;
      default:
        return false;
    }
  });
}
