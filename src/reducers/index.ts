import { IFilmModel } from '../types/model'

export interface IFilmState {
  fetching: boolean
  error: string
  offset: number
  limit: number
  items: { [key: string]: IFilmModel }
}

export interface IRootState {
  film: IFilmState
}