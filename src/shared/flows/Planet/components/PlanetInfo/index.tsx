'use client';

import ClimateIcon from '@/shared/components/ui/Icons/ClimateIcon';
import PopulationIcon from '@/shared/components/ui/Icons/PopulationIcon';

import TerrainIcon from '@/shared/components/ui/Icons/TerrainIcon';
import Item from '@/shared/components/ui/Item';
import { Typography } from '@/shared/components/ui/Typography';
import getImageUrl from '@/shared/utils/get-image-urls';
import Image from 'next/image';
import { useState } from 'react';
import { PlanetInfoProps } from './types';

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  const [enableEdit, setEnableEdit] = useState(false);
  const [planetName, setPlanetName] = useState<string>(planet.name);

  const handleEnableEdit = () => {
    setEnableEdit(true);
  };

  const handleDisableEdit = () => {
    setEnableEdit(false);
  };

  return (
    <div className="flex w-full items-center pb-[1rem]">
      <div className="flex w-1/2 items-center">
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
              className="text-black"
              fontFamily="montserrat"
              onClick={handleEnableEdit}
            >
              {planetName}
            </Typography>
          ) : (
            <div>
              <input
                type="text"
                value={planetName}
                onChange={(e) => setPlanetName(e.target.value)}
              />

              <button onClick={handleDisableEdit}>x</button>
            </div>
          )}
        </div>
      </div>

      <div className="gap-xxs flex w-1/2 flex-col">
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
