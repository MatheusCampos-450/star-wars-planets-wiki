import LogoStarStarsSVG from '../../ui/LogoStarWarsSVG';
import { Typography } from '../../ui/Typography';

function HeaderPage() {
  return (
    <header className="flex w-full flex-col items-center justify-start pb-[1.5rem] md:pb-[3.5rem]">
      <Typography
        as="h4"
        fontFamily="montserrat"
        className="pb-sm tracking-[.155rem] text-white"
      >
        PLANET SEARCH
      </Typography>

      <LogoStarStarsSVG />
    </header>
  );
}

export default HeaderPage;
