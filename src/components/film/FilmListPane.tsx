import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'

interface IFilmListPaneProps {
  fetching: boolean
  error: string
  items: { [key: string]: IFilmModel }
  onComponentMount: () => void
}


class FilmListPane extends React.Component<IFilmListPaneProps> {

  constructor(props: IFilmListPaneProps) {
    super(props)
  }

  public componentDidMount() {
    this.props.onComponentMount()
  }

  public render () {
    const { fetching, items } = this.props
    return (
      <div>
        {fetching && (
          <div>fetching</div>
        )}

        {Object.keys(items).map((key: string) => {
          return (
            <div className='font-dark-grey' key={`film-${key}`}>
              <Link to={`films/${items[key].id}`}>
                Episode #{items[key].episode_id} {items[key].title} ({items[key].release_date})
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default FilmListPane