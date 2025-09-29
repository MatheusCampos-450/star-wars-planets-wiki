import { OptionProps } from '@/shared/components/ui/Select/tyles';
import { Dispatch, SetStateAction } from 'react';

export interface FiltersProps {
  setSortByName: Dispatch<SetStateAction<OptionProps>>;
  setFilterByPopulation: Dispatch<SetStateAction<OptionProps>>;
}
