import { IFilmState } from '../../index'
import {
  IFilmAction,
  IFilmListFetchFail,
  IFilmListFetchSuccess
} from '../../../actions/film/index'
import {
  ACTION_FILM_LIST_FETCH_FAIL,
  ACTION_FILM_LIST_FETCH_REQUEST,
  ACTION_FILM_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import { IFilmModel } from '../../../types/model'

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
    default:
      return state
  }
}

const setFilmListFetching = (state: IFilmState, action: IFilmAction): IFilmState => {
  return Object.assign({}, state, { fetching: true })
}

const setFilmListFetchSuccess = (state: IFilmState, action: IFilmAction): IFilmState => {
  const result = (action as IFilmListFetchSuccess).result
  const filmListObject = result.results.reduce((acc: { [key: string]: IFilmModel }, cur: IFilmModel) => {
    acc[cur.episode_id] = cur
    return acc
  }, {})
  return Object.assign({}, state, { fetching: false, error: '', items: filmListObject})
}

const setFilmListFetchFail = (state: IFilmState, action: IFilmAction): IFilmState => {
  const error = (action as IFilmListFetchFail).error
  return Object.assign({}, state, { fetching: false, error})
}