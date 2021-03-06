import { ICharacterState } from '../../index'
import {
  ICharacterAction,
  ICharacterFetchFail,
  ICharacterFetchSuccess,
  ICharacterListFetchFail,
  ICharacterListFetchSuccess
} from '../../../actions/character/index'
import {
  ACTION_CHARACTER_FETCH_FAIL,
  ACTION_CHARACTER_FETCH_REQUEST,
  ACTION_CHARACTER_FETCH_SUCCESS,
  ACTION_CHARACTER_LIST_FETCH_FAIL,
  ACTION_CHARACTER_LIST_FETCH_REQUEST,
  ACTION_CHARACTER_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import { ICharacterDTO } from '../../../types/dto'
import {
  parseCharacterId,
  parseFilmId
} from '../../../utils/url'
import { ICharacterModel } from '../../../types/model'

const initialState: ICharacterState = {
  fetching: false,
  error: '',
  items: {}
}

export const characterReducer = (state: ICharacterState = initialState, action: ICharacterAction): ICharacterState => {
  switch (action.type) {
    case ACTION_CHARACTER_LIST_FETCH_REQUEST:
      return setCharacterListFetchinig(state, action)
    case ACTION_CHARACTER_LIST_FETCH_SUCCESS:
      return setCharacterListFetchSuccess(state, action)
    case ACTION_CHARACTER_LIST_FETCH_FAIL:
      return setCharacterListFetchFail(state, action)
    case ACTION_CHARACTER_FETCH_REQUEST:
      return setCharacterFetchinig(state, action)
    case ACTION_CHARACTER_FETCH_SUCCESS:
      return setCharacterFetchSuccess(state, action)
    case ACTION_CHARACTER_FETCH_FAIL:
      return setCharacterFetchFail(state, action)
    default:
      return state
  }
}

const setCharacterListFetchinig = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  return Object.assign({}, state, { fetching: true })
}

const setCharacterListFetchSuccess = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  const result = (action as ICharacterListFetchSuccess).result
  const charactersObject = result
    .map((it: ICharacterDTO) => {
      const id = parseCharacterId(it.url)
      const filmIds = it.films.map(filmUrl => parseFilmId(filmUrl))
      return Object.assign({}, it, { id, filmIds })
    })
    .reduce((acc: { [key: string]: ICharacterModel }, cur: ICharacterModel) => {
      acc[cur.id] = cur
      return acc
    }, {})


  return Object.assign({}, state, {
    fetching: false,
    error: '',
    items: {...state.items, ...charactersObject}
  })
}

const setCharacterListFetchFail = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  const error = (action as ICharacterListFetchFail).error
  return Object.assign({}, state, { fetching: false, error})
}

const setCharacterFetchinig = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  return Object.assign({}, state, { fetching: true })
}

const setCharacterFetchSuccess = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  const result = (action as ICharacterFetchSuccess).result
  const id = parseCharacterId(result.url)
  const filmIds = result.films.map(filmUrl => parseFilmId(filmUrl))
  const character = Object.assign({}, result, { id, filmIds })

  return Object.assign({}, state, {
    fetching: false,
    error: '',
    items: {...state.items, [character.id]: character}
  })
}

const setCharacterFetchFail = (state: ICharacterState, action: ICharacterAction): ICharacterState => {
  const error = (action as ICharacterFetchFail).error
  return Object.assign({}, state, { fetching: false, error})
}