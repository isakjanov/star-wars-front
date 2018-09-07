import { IFilmListDTO } from '../../types/dto'

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

export type IFilmAction = IFilmListFetchRequest
  | IFilmListFetchSuccess
  | IFilmListFetchSuccess