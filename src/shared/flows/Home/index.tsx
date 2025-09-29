import creativeMarsImage from '@/shared/assets/creative-mars-collage.jpg';

import HeaderPage from '@/shared/components/layout/HeaderPage';
import { Typography } from '@/shared/components/ui/Typography';

import SearchPlanets from './components/SearchPlanets';

function Home() {
  return (
    <div className="p-md sm:px-xxl md:p-xl flex h-fit w-full items-center justify-center">
      <div className="flex w-full max-w-[50rem] flex-col items-center justify-center">
        <HeaderPage />

        <section className="flex h-fit w-full flex-col rounded-[.625rem] bg-black/50 md:h-[25.125rem] md:flex-row">
          <div
            style={{
              backgroundImage: `url(${creativeMarsImage.src})`,
            }}
            className={`h-[11.75rem] w-full rounded-[.625rem] bg-cover bg-center bg-no-repeat md:h-full md:w-[50%]`}
          />

          <div className="p-md md:p-xl flex h-fit w-full flex-col items-center justify-center md:h-full md:w-[50%]">
            <Typography
              as="h2"
              fontFamily="montserrat"
              className="pb-[1.5rem] text-center text-white"
            >
              Discover all the information about Planets of the Star Wars Saga
            </Typography>

            <SearchPlanets />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
