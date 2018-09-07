import { IFilmListDTO } from '../types/dto'

export interface IFilmService {

  getFilms(): Promise<IFilmListDTO>
}