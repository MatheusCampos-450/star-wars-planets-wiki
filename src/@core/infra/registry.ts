export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),

  PlanetHttpGateway: Symbol.for('PlanetHttpGateway'),
  GetPlanetUseCase: Symbol.for('GetPlanetUseCase'),
  ListPlanetUseCase: Symbol.for('ListPlanetUseCase'),

  FilmHttpGateway: Symbol.for('FilmHttpGateway'),
  GetFilmUseCase: Symbol.for('GetFilmUseCase'),

  PeopleHttpGateway: Symbol.for('PeopleHttpGateway'),
  GetPeopleUseCase: Symbol.for('GetPeopleUseCase'),
};
