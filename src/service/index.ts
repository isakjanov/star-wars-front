import {
  ICharacterDTO,
  IFilmDTO,
  IFilmListDTO,
  IPlanetDTO
} from '../types/dto'

export interface IFilmService {

  getFilmList(): Promise<IFilmListDTO>

  getFilm(id: number): Promise<IFilmDTO>
}

export interface ICharacterService {

  getCharacter(id: number): Promise<ICharacterDTO>

  getCharacters(ids: number[]): Promise<ICharacterDTO[]>
}

export interface IPlanetService {
  getPlanet(id: number): Promise<IPlanetDTO>
}