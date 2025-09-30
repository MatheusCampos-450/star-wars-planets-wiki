'use client';

import { ListPlanetsUseCase } from '@/@core/application/planet/list-planet.use-case';
import { Planet } from '@/@core/domain/entities/planet';
import { container } from '@/@core/infra/container-registry';
import { Registry } from '@/@core/infra/registry';
import Button from '@/shared/components/ui/Button';
import SearchIcon from '@/shared/components/ui/Icons/SearchIcon';
import Input from '@/shared/components/ui/Input';
import Spinner from '@/shared/components/ui/Spinner';
import { Typography } from '@/shared/components/ui/Typography';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import convertPlanetUrl from '@/shared/utils/convert-planet-url';
import { filterBy } from '@/shared/utils/filter-by';
import getImageUrl from '@/shared/utils/get-image-urls';
import { sortBy } from '@/shared/utils/sort-by';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { SearchInputProps } from './types';

const getPlanets = async (searchTerm: string) => {
  const search = isNaN(Number(searchTerm)) ? searchTerm : '';

  const useCase = container.get<ListPlanetsUseCase>(Registry.ListPlanetUseCase);
  const planets = await useCase.execute(search);

  return planets;
};

export default function SearchInput({
  filterByPopulation,
  setFilterByPopulation,
  sortByName,
  setSortByName,
}: SearchInputProps) {
  const router = useRouter();

  const queryClient = useQueryClient();

  const [isOpenResults, setIsOpenResults] = useState(false);
  const [searchTermState, setSearchTermState] = useState('');
  const [results, setResults] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const wrapperRef = useOutsideClick(() => {
    setIsOpenResults(false);
    setResults([]);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTermState(e.target.value);
  };

  const handleSearch = async () => {
    setIsOpenResults(true);
    setIsLoading(true);

    const data = await queryClient.fetchQuery({
      queryKey: ['planets', searchTermState],
      queryFn: () => getPlanets(searchTermState),
    });

    setResults(data);
    setIsLoading(false);
  };

  const handleRedirect = (planetUrl: string) => {
    console.log(convertPlanetUrl(planetUrl));

    setIsOpenResults(false);
    setFilterByPopulation(null);
    setSortByName(null);
    setSearchTermState('');
    setResults([]);

    router.push(convertPlanetUrl(planetUrl));
  };

  const hasPopulationFilter =
    filterByPopulation !== null && !isNaN(Number(searchTermState));

  const resultsFiltered = hasPopulationFilter
    ? filterBy(
        results,
        'population',
        Number(searchTermState),
        filterByPopulation.id,
      )
    : results;

  const resultsOrdered =
    sortByName !== null
      ? sortBy(resultsFiltered, 'name', sortByName.id)
      : resultsFiltered;

  return (
    <div ref={wrapperRef} className="gap-xxs flex w-full flex-col">
      <div className="relative flex w-full flex-col">
        <Input
          placeholder="Enter the name in the planet"
          className="font-lato placeholder:font-lato"
          onChange={handleChange}
          value={searchTermState}
        />

        {isOpenResults && (
          <div className="mt-xxs absolute top-full z-10 flex h-[300%] w-full flex-col overflow-auto rounded-[.3125rem] bg-white">
            {isLoading ? (
              <div className="p-sm flex h-full w-full items-center justify-center">
                <Spinner />
              </div>
            ) : resultsOrdered.length === 0 ? (
              <Typography
                as="strong"
                fontFamily="lato"
                className="flex h-full w-full items-center justify-center"
              >
                Nenhum planeta encontrado!
              </Typography>
            ) : (
              resultsOrdered?.map((planet) => (
                <button
                  key={planet.name}
                  onClick={() => handleRedirect(planet.url)}
                  className="p-xxs gap-xxs hover:bg-gray/15 flex cursor-pointer items-center rounded-[.3125rem]"
                >
                  <Image
                    className="border-gray rounded-full border-[.0313rem] border-solid"
                    src={getImageUrl(planet.name)}
                    alt={`planet ${planet.name}}`}
                    width={48}
                    height={48}
                  />

                  <div className="flex flex-col">
                    <Typography as="strong" className="text-start">
                      {planet.name}
                    </Typography>
                    <Typography as="p" className="text-start">
                      Population: {planet.population}
                    </Typography>
                  </div>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      <Button type="button" onClick={handleSearch} icon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
}
