export interface PeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export class People {
  constructor(public props: PeopleProps) {}

  get name(): string {
    return this.props.name;
  }

  get height(): string {
    return this.props.height;
  }

  get mass(): string {
    return this.props.mass;
  }

  get hair_color(): string {
    return this.props.hair_color;
  }

  get skin_color(): string {
    return this.props.skin_color;
  }

  get eye_color(): string {
    return this.props.eye_color;
  }

  get birth_year(): string {
    return this.props.birth_year;
  }

  get gender(): string {
    return this.props.gender;
  }

  get homeworld(): string {
    return this.props.homeworld;
  }

  get films(): string[] {
    return this.props.films;
  }

  get species(): string[] {
    return this.props.species;
  }

  get vehicles(): string[] {
    return this.props.vehicles;
  }

  get starships(): string[] {
    return this.props.starships;
  }

  get created(): string {
    return this.props.created;
  }

  get edited(): string {
    return this.props.edited;
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