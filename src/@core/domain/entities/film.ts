export interface FilmProps {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export class Film {
  constructor(public props: FilmProps) {}

  get title(): string {
    return this.props.title;
  }

  get episode_id(): number {
    return this.props.episode_id;
  }

  get opening_crawl(): string {
    return this.props.opening_crawl;
  }

  get director(): string {
    return this.props.director;
  }

  get producer(): string {
    return this.props.producer;
  }

  get release_date(): string {
    return this.props.release_date;
  }

  get characters(): string[] {
    return this.props.characters;
  }

  get planets(): string[] {
    return this.props.planets;
  }

  get starships(): string[] {
    return this.props.starships;
  }

  get vehicles(): string[] {
    return this.props.vehicles;
  }

  get species(): string[] {
    return this.props.species;
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