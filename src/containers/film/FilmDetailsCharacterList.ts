import { connect } from 'react-redux'
import { IRootState } from '../../reducers/index'
import { parseCharacterId } from '../../utils/url'
import { fetchCharacterListByIds } from '../../actions/character/impl/index'
import FilmDetailsCharacterList from '../../components/film/FilmDetailsCharacterList'

const mapStateToProps = (state: IRootState, ownProps: any) => {
  return {
    fetching: state.character.fetching,
    error: state.character.error,
    characters: Object.values(state.character.items)
      .filter(it => it.filmIds.includes(ownProps.filmId)),
    availableCharacterIds: Object.keys(state.character.items).map(it => +it),
    charactersUrlList: state.film.items[ownProps.filmId] ? state.film.items[ownProps.filmId].characters : []
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFilmCharacters: (urlList: string[], availableCharacterIds: number[]) => {
      const characterIds = urlList
        .map(it => parseCharacterId(it))
        .filter(it => it > 0)
        .filter(it => !availableCharacterIds.includes(it))

      dispatch(fetchCharacterListByIds(characterIds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsCharacterList)