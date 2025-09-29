import { GetPlanetUseCase } from '@/@core/application/planet/get-planet.use-case';
import { container } from '@/@core/infra/container-registry';
import { Registry } from '@/@core/infra/registry';
import Planet from '@/shared/flows/Planet';

const getPlanetUseCase = container.get<GetPlanetUseCase>(
  Registry.GetPlanetUseCase,
);

const getPlanet = async (planetId: string) => {
  return await getPlanetUseCase.execute(planetId);
};

async function PlanetPage({ params }: PageProps<'/planet/[planetId]'>) {
  const { planetId } = await params;

  const planet = await getPlanet(planetId);

  console.log();

  return <Planet planet={planet.props} />;
}

export default PlanetPage;
