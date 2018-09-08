import { ICharacterDTO } from '../../types/dto'

export interface ICharacterListFetchRequest {
  type: string
}

export interface ICharacterListFetchSuccess {
  type: string
  result: ICharacterDTO[]
}

export interface ICharacterListFetchFail {
  type: string
  error: string
}

export interface ICharacterFetchRequest {
  type: string
}

export interface ICharacterFetchSuccess {
  type: string
  result: ICharacterDTO
}

export interface ICharacterFetchFail {
  type: string
  error: string
}

export type ICharacterAction = ICharacterListFetchRequest
  | ICharacterListFetchSuccess
  | ICharacterListFetchFail
  | ICharacterFetchRequest
  | ICharacterFetchSuccess
  | ICharacterFetchFail