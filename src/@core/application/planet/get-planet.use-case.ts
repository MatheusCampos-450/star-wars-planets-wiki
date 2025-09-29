import { Planet } from '@/@core/domain/entities/planet';
import { PlanetGateway } from '@/@core/domain/gateways/planet.gateway';

export class GetPlanetUseCase {
  constructor(private planetGateway: PlanetGateway) {}

  execute(id: string): Promise<Planet> {
    return this.planetGateway.findById(id);
  }
}
