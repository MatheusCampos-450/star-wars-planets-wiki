'use client';

import ClimateIcon from '@/shared/components/ui/Icons/ClimateIcon';
import PopulationIcon from '@/shared/components/ui/Icons/PopulationIcon';

import TerrainIcon from '@/shared/components/ui/Icons/TerrainIcon';
import Item from '@/shared/components/ui/Item';
import { Typography } from '@/shared/components/ui/Typography';
import getImageUrl from '@/shared/utils/get-image-urls';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PlanetInfoProps } from './types';

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  const [enableEdit, setEnableEdit] = useState(false);
  const [planetName, setPlanetName] = useState<string>(planet.name);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnableEdit = () => {
    setEnableEdit(true);
  };

  const handleDisableEdit = () => {
    setEnableEdit(false);
  };

  useEffect(() => {
    if (enableEdit) {
      inputRef.current?.focus();
    }
  }, [inputRef, enableEdit]);

  return (
    <div className="flex w-full flex-col items-center pb-[1rem] md:flex-row">
      <div className="flex w-full items-center md:w-1/2">
        <Image
          className="pr-xxs"
          src={getImageUrl(planet.name)}
          alt={`planet ${planet.name}`}
          height={74}
          width={74}
        />

        <div className="flex w-full flex-col justify-center">
          <Typography as="p" className="text-black" fontFamily="montserrat">
            Planet:
          </Typography>

          {!enableEdit ? (
            <Typography
              as="h3"
              className="cursor-pointer text-black transition-[300ms] ease-in-out hover:translate-x-[.125rem]"
              fontFamily="montserrat"
              onClick={handleEnableEdit}
              title="Click to edit"
            >
              {planetName}
            </Typography>
          ) : (
            <div className="gap-xxs pb-xxs flex flex-col">
              <input
                ref={inputRef}
                className="font-montserrat text-md w-full font-extrabold text-black"
                type="text"
                value={planetName}
                onChange={(e) => setPlanetName(e.target.value)}
              />

              <button
                className="px-xxs border-gray90 font-montserrat flex h-full w-fit items-center justify-center rounded-sm border border-solid py-[.125rem] text-xs"
                onClick={handleDisableEdit}
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="gap-xxs flex w-full flex-col pl-[4.625rem] md:w-1/2 md:pl-0">
        <Item icon={<ClimateIcon />} label="Climate:" value={planet.climate} />

        <Item icon={<TerrainIcon />} label="Terrain:" value={planet.terrain} />

        <Item
          icon={<PopulationIcon />}
          label="Population:"
          value={planet.population}
        />
      </div>
    </div>
  );
}
