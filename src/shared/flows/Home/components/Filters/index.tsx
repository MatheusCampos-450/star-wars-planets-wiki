'use client';

import FilterIcon from '@/shared/components/ui/Icons/FilterIcon';
import Select from '@/shared/components/ui/Select';
import { Typography } from '@/shared/components/ui/Typography';
import { filterStyles } from './styles';
import { FiltersProps } from './types';

function Filters({ setFilterByPopulation, setSortByName }: FiltersProps) {
  const { filterContainer, filterTextContainer } = filterStyles();

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
    </div>
  );
}

export default Filters;
