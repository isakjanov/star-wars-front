import {
  IFilmDTO,
  IFilmListDTO
} from '../types/dto'

export interface IFilmService {

  getFilmList(): Promise<IFilmListDTO>

  getFilm(id: number): Promise<IFilmDTO>
}