import * as React from 'react'
import { MoonLoader } from 'react-spinners'

interface ICharacterDetailsPlanetProps {
  planetUrl: string
  planetName?: string
  fetching: boolean,
  error: string
  fetchPlanet: (url: string) => void
}

class CharacterDetailsPlanet extends React.Component<ICharacterDetailsPlanetProps> {
  constructor(props: ICharacterDetailsPlanetProps) {
    super(props)
  }

  public componentDidMount() {
    if (!this.props.planetName) {
      this.props.fetchPlanet(this.props.planetUrl)
    }
  }

  public render() {
    const { planetName, fetching, error } = this.props
    return (
      <div>
        <MoonLoader
          sizeUnit={'px'}
          size={18}
          color={'#2196F3'}
          loading={fetching}
        />
        {error && (<div>{error}</div>)}
        {planetName && (<span>{planetName}</span>)}
      </div>
    )
  }
}

export default CharacterDetailsPlanet