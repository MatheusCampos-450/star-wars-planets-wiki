import { OptionProps } from '@/shared/components/ui/Select/tyles';
import { ComparisonOperator } from '@/shared/utils/filter-by';
import { SortOrder } from '@/shared/utils/sort-by';
import { Dispatch, SetStateAction } from 'react';

export interface SearchInputProps {
  sortByName: OptionProps<SortOrder>;
  setSortByName: Dispatch<SetStateAction<OptionProps>>;

  filterByPopulation: OptionProps<ComparisonOperator>;
  setFilterByPopulation: Dispatch<SetStateAction<OptionProps>>;
}
