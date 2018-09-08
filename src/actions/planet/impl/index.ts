import {
  IPlanetFetchFail,
  IPlanetFetchRequest,
  IPlanetFetchSuccess,
} from '../index'
import {
  ACTION_PLANET_FETCH_FAIL,
  ACTION_PLANET_FETCH_REQUEST,
  ACTION_PLANET_FETCH_SUCCESS
} from '../../../const/actions'
import { IPlanetDTO } from '../../../types/dto'
import planetService from '../../../service/impl/planet'


export const planetFetchRequest = (): IPlanetFetchRequest => {
  return {
    type: ACTION_PLANET_FETCH_REQUEST
  }
}

export const planetFetchSuccess = (result: IPlanetDTO): IPlanetFetchSuccess => {
  return {
    type: ACTION_PLANET_FETCH_SUCCESS,
    result
  }
}

export const planetFetchFail = (error: string): IPlanetFetchFail => {
  return {
    type: ACTION_PLANET_FETCH_FAIL,
    error
  }
}

export const fetchPlanet = (id: number) => (dispatch: any) => {
  dispatch(planetFetchRequest())
  planetService.getPlanet(id)
    .then(
      (result: IPlanetDTO) => {
        dispatch(planetFetchSuccess(result))
      },
      (error: string) => {
        dispatch(planetFetchFail(error))
      })
}