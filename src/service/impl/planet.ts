import { IPlanetService } from '../index'
import { IPlanetDTO } from '../../types/dto'
import { sendRequest } from '../../utils/request'

class PlanetService implements IPlanetService {
  public getPlanet(id: number): Promise<IPlanetDTO> {
    const url = `https://swapi.co/api/planets/${id}`
    return sendRequest('GET', url)
      .then(result => result.json())
  }
}

const planetService = new PlanetService()
export default planetService