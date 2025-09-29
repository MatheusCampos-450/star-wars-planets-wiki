import { Planet } from '@/@core/domain/entities/planet';
import { PlanetGateway } from '@/@core/domain/gateways/planet.gateway';

export class ListPlanetsUseCase {
  constructor(private planetGateway: PlanetGateway) {}

  execute(search?: string): Promise<Planet[]> {
    return this.planetGateway.findAll(search);
  }
}
