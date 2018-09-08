import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'
import FilmDetailsCharacterList from '../../containers/film/FilmDetailsCharacterList'

interface IFilmDetailsPaneProps {
  filmId: string
  fetching: boolean,
  error: string,
  filmItem?: IFilmModel
  fetchFilmDetails: (filmId: number) => void
}

class FilmDetailsPane extends React.Component<IFilmDetailsPaneProps> {

  constructor(props: IFilmDetailsPaneProps) {
    super(props)
  }

  public componentDidMount() {
    const {filmItem, filmId, fetchFilmDetails} = this.props
    if (!filmItem) {
      fetchFilmDetails(+filmId)
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

            <FilmDetailsCharacterList filmId={filmItem.id}/>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default FilmDetailsPane