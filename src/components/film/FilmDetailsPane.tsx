import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'

interface IFilmDetailsPaneProps {
  filmId: string
  fetching: boolean,
  error: string,
  filmItem?: IFilmModel
  onComponentMount: (filmId: number) => void
}

class FilmDetailsPane extends React.Component<IFilmDetailsPaneProps> {

  constructor(props: IFilmDetailsPaneProps) {
    super(props)
  }

  public componentDidMount() {
    if (!this.props.filmItem) {
      this.props.onComponentMount(+this.props.filmId)
    }
  }

  public render() {
    const {filmItem} = this.props
    return (
      <div>
        <Link to='/'>Home</Link>
        {filmItem && Object.keys(filmItem).map((it: string) => {
          return (
            <div key={it}>{it}: {filmItem[it]}</div>
          )
        })}
      </div>
    )
  }
}

export default FilmDetailsPane