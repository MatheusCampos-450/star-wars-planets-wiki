'use client';

import Image from 'next/image';

import creativeMarsImage from '@/shared/assets/creative-mars-collage.jpg';
import spaceShipImage from '@/shared/assets/spaceship.png';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export default function ImageSection() {
  const isMobile = useMediaQuery(767);

  const imageSize = isMobile
    ? {
        width: 323,
        height: 229,
      }
    : {
        width: 462,
        height: 328,
      };

  return (
    <div
      style={{
        backgroundImage: `url(${creativeMarsImage.src})`,
      }}
      className={`relative h-[11.75rem] w-full rounded-[.625rem] bg-cover bg-center bg-no-repeat md:h-full md:w-[50%]`}
    >
      <Image
        className="absolute top-[15%] -right-[10%] z-10 md:top-[55%] md:right-[30%]"
        src={spaceShipImage}
        alt="Spaceship"
        width={imageSize.width}
        height={imageSize.height}
      />
    </div>
  );
}
