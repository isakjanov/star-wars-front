import {
  IFilmFetchFail,
  IFilmFetchRequest,
  IFilmFetchSuccess,
  IFilmListFetchFail,
  IFilmListFetchRequest,
  IFilmListFetchSuccess
} from '../index'
import {
  ACTION_FILM_FETCH_FAIL,
  ACTION_FILM_FETCH_REQUEST,
  ACTION_FILM_FETCH_SUCCESS,
  ACTION_FILM_LIST_FETCH_FAIL,
  ACTION_FILM_LIST_FETCH_REQUEST,
  ACTION_FILM_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import {
  IFilmDTO,
  IFilmListDTO
} from '../../../types/dto'
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

export const filmFetchRequest = (): IFilmFetchRequest => {
  return {
    type: ACTION_FILM_FETCH_REQUEST
  }
}

export const filmFetchSuccess = (result: IFilmDTO): IFilmFetchSuccess => {
  return {
    type: ACTION_FILM_FETCH_SUCCESS,
    result
  }
}

export const filmFetchFail = (error: string): IFilmFetchFail => {
  return {
    type: ACTION_FILM_FETCH_FAIL,
    error
  }
}



export const fetchFilmList = () => (dispatch: any) => {
  dispatch(filmListFetchRequest())
  filmService.getFilmList()
    .then((result: IFilmListDTO) => {
      dispatch(filmListFetchSuccess(result))
    })
    .catch((error: string) => {
      dispatch(filmListFetchFail(error))
    })
}

export const fetchFilm = (id: number) => (dispatch: any) => {
  dispatch(filmFetchRequest())
  filmService.getFilm(id)
    .then((result: IFilmDTO) => {
      dispatch(filmFetchSuccess(result))
    })
    .catch((error: string) => {
      dispatch(filmListFetchFail(error))
    })
}