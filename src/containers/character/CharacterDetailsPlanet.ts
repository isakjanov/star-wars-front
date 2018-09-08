import { connect } from 'react-redux'
import { IRootState } from '../../reducers'
import { parsePlanetId } from '../../utils/url'
import { fetchPlanet } from '../../actions/planet/impl'
import CharacterDetailsPlanet from '../../components/character/CharacterDetailsPlanet'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  const planet = state.planet.items[parsePlanetId(ownProps.planetUrl)]
  return {
    planetUrl: ownProps.planetUrl,
    planetName: planet ? planet.name : undefined,
    fetching: state.planet.fetching,
    error: state.planet.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPlanet: (url: string) => {
      dispatch(fetchPlanet(parsePlanetId(url)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsPlanet)