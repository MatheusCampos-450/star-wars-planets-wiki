import { Film } from '../entities/film';

export interface FilmGateway {
  findById(id: number): Promise<Film>;
}
