import {
  ICharacterFetchFail,
  ICharacterFetchRequest,
  ICharacterFetchSuccess,
  ICharacterListFetchFail,
  ICharacterListFetchRequest,
  ICharacterListFetchSuccess
} from '../index'
import {
  ACTION_CHARACTER_FETCH_FAIL,
  ACTION_CHARACTER_FETCH_REQUEST,
  ACTION_CHARACTER_FETCH_SUCCESS,
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

export const characterFetchRequest = (): ICharacterFetchRequest => {
  return {
    type: ACTION_CHARACTER_FETCH_REQUEST
  }
}

export const characterFetchSuccess = (result: ICharacterDTO): ICharacterFetchSuccess => {
  return {
    type: ACTION_CHARACTER_FETCH_SUCCESS,
    result
  }
}

export const characterFetchFail = (error: string): ICharacterFetchFail => {
  return {
    type: ACTION_CHARACTER_FETCH_FAIL,
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

export const fetchCharacter = (id: number) => (dispatch: any) => {
  dispatch(characterFetchRequest())
  characterService.getCharacter(id)
    .then(
      (result: ICharacterDTO) => {
        dispatch(characterFetchSuccess(result))
      },
      (error: string) => {
        dispatch(characterFetchFail(error))
      })
}