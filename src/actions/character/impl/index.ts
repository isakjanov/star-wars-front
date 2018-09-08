import {
  ICharacterListFetchFail,
  ICharacterListFetchRequest,
  ICharacterListFetchSuccess
} from '../index'
import {
  ACTION_CHARACTER_LIST_FETCH_FAIL,
  ACTION_CHARACTER_LIST_FETCH_REQUEST,
  ACTION_CHARACTER_LIST_FETCH_SUCCESS
} from '../../../const/actions'
import { ICharacterDTO } from '../../../types/dto'
import characterService from '../../../service/impl/character'

export const characterListFetchRequest = (): ICharacterListFetchRequest => {
  return {
    type: ACTION_CHARACTER_LIST_FETCH_REQUEST
  }
}

export const characterListFetchSuccess = (result: ICharacterDTO[]): ICharacterListFetchSuccess => {
  return {
    type: ACTION_CHARACTER_LIST_FETCH_SUCCESS,
    result
  }
}

export const characterListFetchFail = (error: string): ICharacterListFetchFail => {
  return {
    type: ACTION_CHARACTER_LIST_FETCH_FAIL,
    error
  }
}

export const fetchCharacterListByIds = (ids: number[]) => (dispatch: any) => {
  dispatch(characterListFetchRequest())
  characterService.getCharacters(ids)
    .then((result: ICharacterDTO[]) => {
      dispatch(characterListFetchSuccess(result))
    })
    .catch((error: string) => {
      dispatch(characterListFetchFail(error))
    })
}