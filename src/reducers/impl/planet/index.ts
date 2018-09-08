import { IPlanetState } from '../../index'
import {
  IPlanetAction,
  IPlanetFetchFail,
  IPlanetFetchSuccess
} from '../../../actions/planet/index'
import {
  ACTION_PLANET_FETCH_FAIL,
  ACTION_PLANET_FETCH_REQUEST,
  ACTION_PLANET_FETCH_SUCCESS
} from '../../../const/actions'
import {
  parseCharacterId,
  parsePlanetId
} from '../../../utils/url'

const initialState: IPlanetState = {
  fetching: false,
  error: '',
  items: {}
}

export const planetReducer = (state: IPlanetState = initialState, action: IPlanetAction): IPlanetState => {
  switch (action.type) {
    case ACTION_PLANET_FETCH_REQUEST:
      return setPlanetFetching(state, action)
    case ACTION_PLANET_FETCH_SUCCESS:
      return setPlanetFetchSuccess(state, action)
    case ACTION_PLANET_FETCH_FAIL:
      return setPlanetFetchFail(state, action)
    default:
      return state
  }
}

const setPlanetFetching = (state: IPlanetState, action: IPlanetAction): IPlanetState => {
  return Object.assign({}, state, { fetching: true })
}

const setPlanetFetchSuccess = (state: IPlanetState, action: IPlanetAction): IPlanetState => {
  const result = (action as IPlanetFetchSuccess).result
  const id = parsePlanetId(result.url)
  const characterIds = result.residents.map(residentUrl => parseCharacterId(residentUrl))
  const planet = Object.assign({}, result, { id, characterIds })

  return Object.assign({}, state, {
    fetching: false,
    error: '',
    items: { ...state.items, [planet.id]: planet }
  })
}

const setPlanetFetchFail = (state: IPlanetState, action: IPlanetAction): IPlanetState => {
  const error = (action as IPlanetFetchFail).error
  return Object.assign({}, state, { fetching: false, error })
}