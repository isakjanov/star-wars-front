import { ICharacterService } from '../index'
import { ICharacterDTO } from '../../types/dto'
import { sendRequest } from '../../utils/request'

class CharacterService implements ICharacterService {

  public getCharacter(id: number): Promise<ICharacterDTO> {
    const url = `https://swapi.co/api/people/${id}`
    return sendRequest('GET', url)
      .then(result => result.json())
  }


  public getCharacters(ids: number[]): Promise<ICharacterDTO[]> {
    return Promise.all(ids.map(id => this.getCharacter(id)))
  }
}

const characterService = new CharacterService()
export default characterService