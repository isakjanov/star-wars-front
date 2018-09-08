import { IPlanetDTO } from '../../types/dto'


export interface IPlanetFetchRequest {
  type: string
}

export interface IPlanetFetchSuccess {
  type: string
  result: IPlanetDTO
}

export interface IPlanetFetchFail {
  type: string
  error: string
}

export type IPlanetAction = IPlanetFetchRequest
  | IPlanetFetchSuccess
  | IPlanetFetchFail