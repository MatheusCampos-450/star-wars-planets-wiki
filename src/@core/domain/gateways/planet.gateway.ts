import { Planet } from '../entities/planet';

export interface PlanetGateway {
  findAll(search?: string): Promise<Planet[]>;
  findById(id: string): Promise<Planet>;
}
