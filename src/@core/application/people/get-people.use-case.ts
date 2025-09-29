import { People } from '@/@core/domain/entities/people';
import { PeopleGateway } from '@/@core/domain/gateways/people.gateway';

export class GetPeopleUseCase {
  constructor(private peopleGateway: PeopleGateway) {}

  execute(id: number): Promise<People> {
    return this.peopleGateway.findById(id);
  }
}
