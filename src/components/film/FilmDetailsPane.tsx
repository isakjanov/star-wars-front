import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'

interface IFilmDetailsPaneProps {
  filmItem: IFilmModel
}

class FilmDetailsPane extends React.Component<IFilmDetailsPaneProps> {

  constructor(props: IFilmDetailsPaneProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        {this.props.filmItem && Object.keys(this.props.filmItem).map((it: string) => {
          return (
            <div key={it}>{it}: {this.props.filmItem[it]}</div>
          )
        })}
      </div>
    )
  }
}

export default FilmDetailsPane