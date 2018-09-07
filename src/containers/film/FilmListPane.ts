import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import FilmListPane from '../../components/film/FilmListPane'
import { fetchFilmList } from '../../actions/film/impl/index'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  return {
    fetching: state.film.fetching,
    error: state.film.error,
    items: state.film.items
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onComponentMount: () => {
      dispatch(fetchFilmList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmListPane)