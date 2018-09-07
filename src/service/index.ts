import { IFilmDTO } from '../types/dto'

export interface IFilmService {

  getFilms(): Promise<IFilmDTO>
}