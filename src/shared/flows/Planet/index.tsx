import HeaderPage from '@/shared/components/layout/HeaderPage';
import BackButton from './components/BackButton';
import FilmsCard from './components/FilmsCard';
import PlanetInfo from './components/PlanetInfo';
import ResidentsCard from './components/ResidentsCard';
import { PlanetProps } from './types';

function Planet({ planet }: PlanetProps) {
  return (
    <div className="p-md sm:px-xxl md:p-xl flex h-fit w-full items-center justify-center">
      <div className="flex w-full max-w-[50rem] flex-col items-center justify-center">
        <HeaderPage />

        <div className="flex w-full max-w-[37rem] flex-col">
          <section className="gap-xxs flex h-fit w-full flex-col rounded-[.625rem] bg-white p-[1.5rem]">
            <PlanetInfo planet={planet} />

            <ResidentsCard residents={planet.residents} />

            <FilmsCard films={planet.films} />
          </section>

          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default Planet;
