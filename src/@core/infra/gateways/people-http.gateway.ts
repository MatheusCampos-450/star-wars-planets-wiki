import { People } from '@/@core/domain/entities/people';
import { PeopleGateway } from '@/@core/domain/gateways/people.gateway';
import { AxiosInstance } from 'axios';

export class PeopleHttpGateway implements PeopleGateway {
  constructor(private http: AxiosInstance) {}

  findById(id: number): Promise<People> {
    return this.http.get<People>(`people/${id}`).then(
      (res) =>
        new People({
          birth_year: res.data.birth_year,
          created: res.data.created,
          edited: res.data.edited,
          eye_color: res.data.eye_color,
          films: res.data.films,
          gender: res.data.gender,
          hair_color: res.data.hair_color,
          height: res.data.height,
          homeworld: res.data.homeworld,
          mass: res.data.mass,
          name: res.data.name,
          skin_color: res.data.skin_color,
          species: res.data.species,
          starships: res.data.starships,
          url: res.data.url,
          vehicles: res.data.vehicles,
        }),
    );
  }
}
