import { Film } from '@/@core/domain/entities/film';
import { FilmGateway } from '@/@core/domain/gateways/film.gateway';

export class GetFilmUseCase {
  constructor(private filmGateway: FilmGateway) {}

  execute(id: number): Promise<Film> {
    return this.filmGateway.findById(id);
  }
}
