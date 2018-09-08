import * as React from 'react'
import {
  ICharacterModel,
  IFilmModel
} from '../../types/model'
import { Link } from 'react-router-dom'

interface IFilmDetailsPaneProps {
  filmId: string
  fetching: boolean,
  error: string,
  filmItem?: IFilmModel
  fetchFilmDetails: (filmId: number) => void
  fetchFilmCharacters: (urlList: string[], availableCharacterIds: number[]) => void
  // TODO: move to FilmDetailsCharacterList
  availableCharacterIds: number[]
  characters: { [key: string]: ICharacterModel}
}

class FilmDetailsPane extends React.Component<IFilmDetailsPaneProps> {

  constructor(props: IFilmDetailsPaneProps) {
    super(props)
  }

  public componentDidMount() {
    const {filmItem, filmId, availableCharacterIds, fetchFilmDetails, fetchFilmCharacters} = this.props
    if (!filmItem) {
      fetchFilmDetails(+filmId)
    }
    if (filmItem) {
      fetchFilmCharacters(filmItem.characters, availableCharacterIds)
    }
  }

  public componentDidUpdate(prepProps: IFilmDetailsPaneProps) {
    if (!prepProps.filmItem && !!this.props.filmItem) {
      this.props.fetchFilmCharacters(this.props.filmItem.characters, this.props.availableCharacterIds)
    }
  }

  public render() {
    const {filmItem} = this.props
    return (
      <div>
        <Link to='/'>Home</Link>

        {filmItem && (
          <React.Fragment>
            <div>Episode #{filmItem.episode_id}: {filmItem.title}</div>
            <div>Director: {filmItem.director}</div>
            <div>Producer: {filmItem.producer}</div>
            <div>Release date: {filmItem.release_date}</div>
            <div>{filmItem.opening_crawl}</div>
          </React.Fragment>
        )}

        {this.props.characters && Object.keys(this.props.characters).map(key => (
          <div key={`char-${this.props.characters[key].id}`}>Character: {this.props.characters[key].name}</div>
        ))}

      </div>
    )
  }
}

export default FilmDetailsPane