import { OptionProps } from '@/shared/components/ui/Select/tyles';
import { ComparisonOperator } from '@/shared/utils/filter-by';
import { Dispatch, SetStateAction } from 'react';

export interface SearchInputProps {
  sortByName: OptionProps;
  setSortByName: Dispatch<SetStateAction<OptionProps>>;

  filterByPopulation: OptionProps<ComparisonOperator>;
  setFilterByPopulation: Dispatch<SetStateAction<OptionProps>>;
}
