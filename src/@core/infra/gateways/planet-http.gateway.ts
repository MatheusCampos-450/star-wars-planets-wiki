import { Planet, PlanetsResponse } from '@/@core/domain/entities/planet';
import { PlanetGateway } from '@/@core/domain/gateways/planet.gateway';
import { AxiosInstance } from 'axios';

export class PlanetHttpGateway implements PlanetGateway {
  constructor(private http: AxiosInstance) {}

  findAll(search?: string): Promise<Planet[]> {
    return this.http
      .get<PlanetsResponse>('/planets/', {
        params: { search },
      })
      .then((res) =>
        res.data.results.map(
          (data) =>
            new Planet({
              climate: data.climate,
              diameter: data.diameter,
              gravity: data.gravity,
              name: data.name,
              orbital_period: data.orbital_period,
              population: data.population,
              residents: data.residents,
              rotation_period: data.rotation_period,
              surface_water: data.surface_water,
              terrain: data.terrain,
              url: data.url,
              created: data.created,
              edited: data.edited,
              films: data.films,
            }),
        ),
      );
  }

  findById(id: string): Promise<Planet> {
    return this.http.get<Planet>(`planets/${id}`).then(
      (res) =>
        new Planet({
          climate: res.data.climate,
          diameter: res.data.diameter,
          gravity: res.data.gravity,
          name: res.data.name,
          orbital_period: res.data.orbital_period,
          population: res.data.population,
          residents: res.data.residents,
          rotation_period: res.data.rotation_period,
          surface_water: res.data.surface_water,
          terrain: res.data.terrain,
          url: res.data.url,
          created: res.data.created,
          edited: res.data.edited,
          films: res.data.films,
        }),
    );
  }
}
