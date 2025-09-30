import { GetFilmUseCase } from '@/@core/application/film/get-film.use-case';
import { Film } from '@/@core/domain/entities/film';
import { container } from '@/@core/infra/container-registry';
import { Registry } from '@/@core/infra/registry';
import Card from '@/shared/components/ui/Card';
import FilmIcon from '@/shared/components/ui/Icons/FilmIcon';
import { extractId } from '@/shared/utils/extract-id';
import { FilmsCardProps } from './types';

const getFilmUseCase = container.get<GetFilmUseCase>(Registry.GetFilmUseCase);

const getFilms = async (films: string[]) => {
  const filmPromises = films
    .map(extractId)
    .filter((id) => id)
    .map((id) => getFilmUseCase.execute(id));

  const results = await Promise.allSettled(filmPromises);

  const filmsResponse = results
    .filter(
      (result): result is PromiseFulfilledResult<Film> =>
        result.status === 'fulfilled',
    )
    .map((result) => result.value);

  const rejectedCount = results.filter((r) => r.status === 'rejected').length;
  if (rejectedCount > 0) {
    console.warn(
      `[FilmsCard] ${rejectedCount} film requests failed or timed out. The error was handled, and valid data will be displayed.`,
    );
  }

  const filmsNames = filmsResponse.map((p) => p.toJSON().title);
  return filmsNames;
};

async function FilmsCard({ films }: FilmsCardProps) {
  let filmsTitles: string[] = [];

  try {
    filmsTitles = await getFilms(films);
  } catch (error) {
    console.error('ERRO CRÍTICO no FilmsCard:', error);

    throw new Error(
      'Falha na aquisição de dados de filmes. Tente um novo Salto no Hiperespaço.',
    );
  }

  return (
    <Card
      icon={<FilmIcon />}
      title={`Films: (${films.length})`}
      items={filmsTitles}
    />
  );
}

export default FilmsCard;
