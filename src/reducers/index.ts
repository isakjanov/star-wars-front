import {
  ICharacterModel,
  IFilmModel,
  IPlanetModel
} from '../types/model'

export interface IFilmState {
  fetching: boolean
  error: string
  offset: number
  limit: number
  items: { [key: string]: IFilmModel }
}

export interface ICharacterState {
  fetching: boolean
  error: string
  items: { [key: string]: ICharacterModel}
}

export interface IPlanetState {
  fetching: boolean
  error: string
  items: { [key: string]: IPlanetModel}
}

export interface IRootState {
  film: IFilmState,
  character: ICharacterState
  planet: IPlanetState
}