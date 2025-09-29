import { Film } from '@/@core/domain/entities/film';
import { FilmGateway } from '@/@core/domain/gateways/film.gateway';
import { AxiosInstance } from 'axios';

export class FilmHttpGateway implements FilmGateway {
  constructor(private http: AxiosInstance) {}

  findById(id: number): Promise<Film> {
    return this.http.get<Film>(`films/${id}`).then(
      (res) =>
        new Film({
          characters: res.data.characters,
          created: res.data.created,
          director: res.data.director,
          edited: res.data.edited,
          episode_id: res.data.episode_id,
          opening_crawl: res.data.opening_crawl,
          planets: res.data.planets,
          producer: res.data.producer,
          release_date: res.data.release_date,
          species: res.data.species,
          starships: res.data.starships,
          title: res.data.title,
          url: res.data.url,
          vehicles: res.data.vehicles,
        }),
    );
  }
}
