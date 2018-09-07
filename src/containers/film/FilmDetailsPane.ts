import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import FilmDetailsPane from '../../components/film/FilmDetailsPane'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  const id = ownProps.match.params.id
  return {
    filmItem: state.film.items[id]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPane)