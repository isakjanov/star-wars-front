import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'

interface IFilmDetailsPaneProps {
  filmItem: IFilmModel
}

const FilmDetailsPane = (props: IFilmDetailsPaneProps) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      {props.filmItem && Object.keys(props.filmItem).map((it: string) => {
        return (
          <div key={it}>{it}: {props.filmItem[it]}</div>
        )
      })}
    </div>
  )
}

export default FilmDetailsPane