import { IFilmState } from '../../index'
import {
  IFilmAction,
  IFilmFetchFail,
  IFilmFetchSuccess,
  IFilmListFetchFail,
  IFilmListFetchSuccess
} from '../../../actions/film/index'
import {
  ACTION_FILM_FETCH_FAIL,
  ACTION_FILM_FETCH_REQUEST,
  ACTION_FILM_FETCH_SUCCESS,
  ACTION_FILM_LIST_FETCH_FAIL,
  ACTION_FILM_LIST_FETCH_REQUEST,
  ACTION_FILM_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import { IFilmModel } from '../../../types/model'
import { IFilmDTO } from '../../../types/dto'
import { parseFilmId } from '../../../utils/url'

const initialState: IFilmState = {
  fetching: false,
  error: '',
  offset: 0,
  limit: 0,
  items: {}
}

export const filmReducer = (state: IFilmState = initialState, action: IFilmAction): IFilmState => {
  switch (action.type) {
    case ACTION_FILM_LIST_FETCH_REQUEST:
      return setFilmListFetching(state, action)
    case ACTION_FILM_LIST_FETCH_SUCCESS:
      return setFilmListFetchSuccess(state, action)
    case ACTION_FILM_LIST_FETCH_FAIL:
      return setFilmListFetchFail(state, action)
    case ACTION_FILM_FETCH_REQUEST:
      return setFilmFetching(state, action)
    case ACTION_FILM_FETCH_SUCCESS:
      return setFilmFetchSuccess(state, action)
    case ACTION_FILM_FETCH_FAIL:
      return setFilmFetchFail(state, action)
    default:
      return state
  }
}

const setFilmListFetching = (state: IFilmState, action: IFilmAction): IFilmState => {
  return Object.assign({}, state, { fetching: true })
}

const setFilmListFetchSuccess = (state: IFilmState, action: IFilmAction): IFilmState => {
  const result = (action as IFilmListFetchSuccess).result
  const filmListObject = result.results.reduce((acc: { [key: string]: IFilmModel }, cur: IFilmDTO) => {
    const filmObject = Object.assign({}, cur, {id: parseFilmId(cur.url)})
    acc[filmObject.id] = filmObject
    return acc
  }, {})
  return Object.assign({}, state, { fetching: false, error: '', items: filmListObject})
}

const setFilmListFetchFail = (state: IFilmState, action: IFilmAction): IFilmState => {
  const error = (action as IFilmListFetchFail).error
  return Object.assign({}, state, { fetching: false, error})
}

const setFilmFetching = (state: IFilmState, action: IFilmAction): IFilmState => {
  return Object.assign({}, state, { fetching: true })
}

const setFilmFetchSuccess = (state: IFilmState, action: IFilmAction): IFilmState => {
  const result = (action as IFilmFetchSuccess).result
  const filmObject = Object.assign({}, result, {id: parseFilmId(result.url)})
  const items = {[filmObject.id]: filmObject}
  return Object.assign({}, state, { fetching: false, error: '', items})
}

const setFilmFetchFail = (state: IFilmState, action: IFilmAction): IFilmState => {
  const error = (action as IFilmFetchFail).error
  return Object.assign({}, state, { fetching: false, error})
}