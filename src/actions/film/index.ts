import { IFilmDTO } from '../../types/dto'

export interface IFilmListFetchRequest {
  type: string
}

export interface IFilmListFetchSuccess {
  type: string
  result: IFilmDTO
}

export interface IFilmListFetchFail {
  type: string
  error: string
}

export type IFilmAction = IFilmListFetchRequest
  | IFilmListFetchSuccess
  | IFilmListFetchSuccess