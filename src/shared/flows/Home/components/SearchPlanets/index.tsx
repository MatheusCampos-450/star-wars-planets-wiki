'use client';

import { OptionProps } from '@/shared/components/ui/Select/tyles';
import Filters from '@/shared/flows/Home/components/Filters';
import SearchInput from '@/shared/flows/Home/components/SearchInput';
import { ComparisonOperator } from '@/shared/utils/filter-by';
import { SortOrder } from '@/shared/utils/sort-by';
import { useState } from 'react';

export default function SearchPlanets() {
  const [sortByName, setSortByName] = useState<OptionProps<SortOrder> | null>(
    null,
  );
  const [filterByPopulation, setFilterByPopulation] =
    useState<OptionProps<ComparisonOperator> | null>(null);

  return (
    <div className="gap-xxs flex w-full flex-col">
      <SearchInput
        filterByPopulation={filterByPopulation}
        setFilterByPopulation={setFilterByPopulation}
        sortByName={sortByName}
        setSortByName={setSortByName}
      />

      <Filters
        filterByPopulation={filterByPopulation}
        sortByName={sortByName}
        setFilterByPopulation={setFilterByPopulation}
        setSortByName={setSortByName}
      />
    </div>
  );
}
