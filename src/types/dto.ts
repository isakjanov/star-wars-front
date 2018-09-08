
export interface IFilmDTO {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[],
  planets: string[],
  starships: string[],
  vehicles: string[],
  species: string[],
  created: Date,
  edited: Date,
  url: string
}

export interface IFilmListDTO {
  count: number
  next?: number
  previous?: number
  results: IFilmDTO[]
}

export interface ICharacterDTO {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: Date
  edited: Date
  species: string[]
  starships: string[]
  url: string
  vehicles: string
}

export interface IPlanetDTO {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string
  created: Date
  edited: Date
  url: string
}