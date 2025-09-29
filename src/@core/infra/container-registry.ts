import 'reflect-metadata';

import { Container } from 'inversify';
import { http } from './http';

import { GetPlanetUseCase } from '../application/planet/get-planet.use-case';
import { ListPlanetsUseCase } from '../application/planet/list-planet.use-case';
import { PlanetHttpGateway } from './gateways/planet-http.gateway';

import { GetFilmUseCase } from '../application/film/get-film.use-case';
import { GetPeopleUseCase } from '../application/people/get-people.use-case';
import { FilmHttpGateway } from './gateways/film-http.gateway';
import { PeopleHttpGateway } from './gateways/people-http.gateway';
import { Registry } from './registry';

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.PlanetHttpGateway).toDynamicValue((context) => {
  return new PlanetHttpGateway(context.get(Registry.AxiosAdapter));
});
container.bind(Registry.GetPlanetUseCase).toDynamicValue((context) => {
  return new GetPlanetUseCase(context.get(Registry.PlanetHttpGateway));
});
container.bind(Registry.ListPlanetUseCase).toDynamicValue((context) => {
  return new ListPlanetsUseCase(context.get(Registry.PlanetHttpGateway));
});

container.bind(Registry.FilmHttpGateway).toDynamicValue((context) => {
  return new FilmHttpGateway(context.get(Registry.AxiosAdapter));
});
container.bind(Registry.GetFilmUseCase).toDynamicValue((context) => {
  return new GetFilmUseCase(context.get(Registry.FilmHttpGateway));
});

container.bind(Registry.PeopleHttpGateway).toDynamicValue((context) => {
  return new PeopleHttpGateway(context.get(Registry.AxiosAdapter));
});
container.bind(Registry.GetPeopleUseCase).toDynamicValue((context) => {
  return new GetPeopleUseCase(context.get(Registry.PeopleHttpGateway));
});
