import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import FilmDetailsPane from '../../components/film/FilmDetailsPane'
import { fetchFilm } from '../../actions/film/impl/index'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  const id = ownProps.match.params.id
  return {
    filmId: id,
    fetching: state.film.fetching,
    error: state.film.error,
    filmItem: state.film.items[id]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFilmDetails: (filmId: number) => {
      dispatch(fetchFilm(filmId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPane)