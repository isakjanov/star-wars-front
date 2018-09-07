import {
  IFilmDTO,
} from '../../types/dto'
import { IFilmService } from '../index'
import { sendRequest } from '../../utils/request'

class FilmService implements IFilmService {

  public getFilms(): Promise<IFilmDTO> {
    return sendRequest('GET', 'https://swapi.co/api/films/')
      .then(result => result.json())
  }
}

const filmService = new FilmService()

export default filmService