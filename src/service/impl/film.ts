import {
  IFilmDTO,
  IFilmListDTO
} from '../../types/dto'
import { IFilmService } from '../index'
import { sendRequest } from '../../utils/request'

class FilmService implements IFilmService {

  public getFilmList(): Promise<IFilmListDTO> {
    const url = 'https://swapi.co/api/films/'
    return sendRequest('GET', url)
      .then(result => result.json())
  }


  public getFilm(id: number): Promise<IFilmDTO> {
    const url = `https://swapi.co/api/films/${id}`
    return sendRequest('GET', url)
      .then(result => result.json())
  }
}

const filmService = new FilmService()

export default filmService