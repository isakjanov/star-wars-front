import * as React from 'react'

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
        {fetching && (<div>fetching</div>)}
        {error && (<div>{error}</div>)}
        Planet: {planetName && (<span>{planetName}</span>)}
      </div>
    )
  }
}

export default CharacterDetailsPlanet