import { IFilmModel } from './model'

export interface IFilmDTO {
  count: number
  next?: number
  previous?: number
  results: IFilmModel[]
}

export interface ICharacterObject {
  name: string
}