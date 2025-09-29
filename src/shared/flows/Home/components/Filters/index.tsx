'use client';

import FilterIcon from '@/shared/components/ui/Icons/FilterIcon';
import Select from '@/shared/components/ui/Select';
import { Typography } from '@/shared/components/ui/Typography';
import { filterStyles } from './styles';
import { FiltersProps } from './types';

function Filters({
  setFilterByPopulation,
  setSortByName,
  filterByPopulation,
  sortByName,
}: FiltersProps) {
  const { filterContainer, filterTextContainer } = filterStyles();

  const handleClearFilters = () => {
    setFilterByPopulation(null);
    setSortByName(null);
  };

  return (
    <div className={filterContainer()}>
      <div className={filterTextContainer()}>
        <FilterIcon />
        <Typography
          as="strong"
          fontFamily="lato"
          className="font-extrabold text-white"
        >
          Filter:
        </Typography>
      </div>

      <Select
        selectedOption={sortByName}
        label="Name"
        onSelect={(option) => setSortByName(option)}
        options={[
          {
            id: 'ascendent',
            label: 'Ascendent',
          },
          {
            id: 'descendent',
            label: 'Descendent',
          },
        ]}
      />

      <Select
        selectedOption={filterByPopulation}
        label="Population"
        onSelect={(option) => setFilterByPopulation(option)}
        options={[
          {
            id: 'equal',
            label: 'Equal',
          },
          {
            id: 'greater',
            label: 'Greater',
          },
          {
            id: 'less',
            label: 'Less',
          },
        ]}
      />

      {(filterByPopulation !== null || sortByName !== null) && (
        <button
          onClick={handleClearFilters}
          className="px-xxs flex cursor-pointer items-center justify-center rounded-md border border-solid border-white text-white"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Filters;
