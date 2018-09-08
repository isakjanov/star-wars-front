import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import CharacterDetailsPane from '../../components/character/CharacterDetailsPane'
import { fetchCharacter } from '../../actions/character/impl/index'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  return {
    id: ownProps.match.params.id,
    fetching: state.character.fetching,
    error: state.character.error,
    character: state.character.items[ownProps.match.params.id],
    routeProps: ownProps
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharacter: (id: number) => {
      dispatch(fetchCharacter(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsPane)