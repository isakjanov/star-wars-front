import {
  IFilmListFetchFail,
  IFilmListFetchRequest,
  IFilmListFetchSuccess
} from '../index'
import {
  ACTION_FILM_LIST_FETCH_FAIL,
  ACTION_FILM_LIST_FETCH_REQUEST,
  ACTION_FILM_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import { IFilmListDTO } from '../../../types/dto'
import filmService from '../../../service/impl/film'

export const filmListFetchRequest = (): IFilmListFetchRequest => {
  return {
    type: ACTION_FILM_LIST_FETCH_REQUEST
  }
}

export const filmListFetchSuccess = (result: IFilmListDTO): IFilmListFetchSuccess => {
  return {
    type: ACTION_FILM_LIST_FETCH_SUCCESS,
    result
  }
}

export const filmListFetchFail = (error: string): IFilmListFetchFail => {
  return {
    type: ACTION_FILM_LIST_FETCH_FAIL,
    error
  }
}

export const fetchFilmList = () => (dispatch: any) => {
  dispatch(filmListFetchRequest())
  filmService.getFilms()
    .then((result: IFilmListDTO) => {
      dispatch(filmListFetchSuccess(result))
    })
    .catch((error: string) => {
      dispatch(filmListFetchFail(error))
    })
}