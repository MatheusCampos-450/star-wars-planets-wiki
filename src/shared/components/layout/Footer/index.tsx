'use client';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import StarWarsLogoBlackSVG from '../../ui/StarWarsLogoBlackSVG';
import { Typography } from '../../ui/Typography';

export default function Footer() {
  const isMobile = useMediaQuery(768);

  return (
    <footer className="flex h-[5.375rem] w-full items-center justify-center bg-white p-[1.25rem]">
      {!isMobile && (
        <>
          <Typography
            as="p"
            fontFamily="lato"
            className="font-medium text-black"
          >
            STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
            reservados
          </Typography>

          <div className="mx-xxl h-[2.75rem] w-[.0625rem] bg-black" />
        </>
      )}

      <StarWarsLogoBlackSVG />
    </footer>
  );
}
