export interface IFilmModel {
  id: number
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

export interface ICharacterModel {
  id: number
  filmIds: number[]
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