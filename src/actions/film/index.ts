import {
  IFilmDTO,
  IFilmListDTO
} from '../../types/dto'

export interface IFilmListFetchRequest {
  type: string
}

export interface IFilmListFetchSuccess {
  type: string
  result: IFilmListDTO
}

export interface IFilmListFetchFail {
  type: string
  error: string
}

export interface IFilmFetchRequest {
  type: string
}

export interface IFilmFetchSuccess {
  type: string
  result: IFilmDTO
}

export interface IFilmFetchFail {
  type: string
  error: string
}

export type IFilmAction = IFilmListFetchRequest
  | IFilmListFetchSuccess
  | IFilmListFetchSuccess
  | IFilmFetchRequest
  | IFilmFetchSuccess
  | IFilmFetchFail