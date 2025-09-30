import { GetPlanetUseCase } from '@/@core/application/planet/get-planet.use-case';
import { PlanetProps } from '@/@core/domain/entities/planet';
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
  let planetData: PlanetProps;

  try {
    const planet = await getPlanet(planetId);

    planetData = planet.toJSON();
  } catch (error) {
    console.error(`ERRO CRÍTICO ao buscar o planeta ${planetId}:`, error);

    throw new Error(
      'O campo de navegação falhou! Tente um novo Salto no Hiperespaço.',
    );
  }

  return <Planet planet={planetData} />;
}

export default PlanetPage;
