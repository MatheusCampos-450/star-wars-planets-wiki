import { People } from '../entities/people';

export interface PeopleGateway {
  findById(id: number): Promise<People>;
}
