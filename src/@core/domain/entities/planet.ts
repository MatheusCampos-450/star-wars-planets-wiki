export type PlanetName =
  | 'tatooine'
  | 'naboo'
  | 'mustafar'
  | 'kashyyyk'
  | 'hoth'
  | 'endor'
  | 'dagobah'
  | 'coruscant'
  | 'bespin'
  | 'kamino'
  | 'alderaan';

export type PlanetProps = {
  name: PlanetName;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

export class Planet {
  constructor(public props: PlanetProps) {}

  get climate(): string {
    return this.props.climate;
  }

  get diameter(): string {
    return this.props.diameter;
  }

  get gravity(): string {
    return this.props.gravity;
  }

  get name(): PlanetName {
    return this.props.name;
  }

  get orbital_period(): string {
    return this.props.orbital_period;
  }

  get population(): string {
    return this.props.population;
  }

  get residents(): string[] {
    return this.props.residents;
  }

  get films(): string[] {
    return this.props.films;
  }

  get created(): string {
    return this.props.created;
  }

  get edited(): string {
    return this.props.edited;
  }

  get rotation_period(): string {
    return this.props.rotation_period;
  }

  get surface_water(): string {
    return this.props.surface_water;
  }

  get terrain(): string {
    return this.props.terrain;
  }

  get url(): string {
    return this.props.url;
  }

  toJSON() {
    return {
      ...this.props,
    };
  }
}
