import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import FilmDetailsPane from '../../components/film/FilmDetailsPane'
import { fetchFilm } from '../../actions/film/impl/index'
import { parseCharacterId } from '../../utils/url'
import { fetchCharacterListByIds } from '../../actions/character/impl/index'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  const id = ownProps.match.params.id
  return {
    filmId: id,
    fetching: state.film.fetching,
    error: state.film.error,
    filmItem: state.film.items[id],
    // TODO: move to FilmDetailsCharacterList
    availableCharacterIds: Object.keys(state.character.items).map(it => +it),
    characters: state.character.items
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFilmDetails: (filmId: number) => {
      dispatch(fetchFilm(filmId))
    },
    fetchFilmCharacters: (urlList: string[], availableCharacterIds: number[]) => {
      const characterIds = urlList
        .map(it => parseCharacterId(it))
        .filter(it => it > 0)
        .filter(it => !availableCharacterIds.includes(it))

      dispatch(fetchCharacterListByIds(characterIds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPane)