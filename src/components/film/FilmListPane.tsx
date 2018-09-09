import * as React from 'react'
import { IFilmModel } from '../../types/model'
import { Link } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

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

  public render() {
    const { fetching, items, error } = this.props
    return (
      <div className='p1'>
        <div className='flex items-center my2'>
          <div className='h3 font-blue mr3'>Episodes</div>
          <MoonLoader
            sizeUnit={'px'}
            size={18}
            color={'#2196F3'}
            loading={fetching}
          />
          {error && (
            <div className='font-red h6'>{error}</div>
          )}
        </div>

        {Object.keys(items).map((key: string) => {
          return (
            <Link to={`films/${items[key].id}`} key={`film-${key}`}>
              <FilmListItem film={items[key]}/>
            </Link>
          )
        })}
      </div>
    )
  }
}

interface IFilmListItemProps {
  film: IFilmModel
}

const FilmListItem = (props: IFilmListItemProps) => {
  const { film } = props
  return (
    <div className='flex flex-row items-baseline mt1'>
      <div className='Episode h5 font-dark-grey'>Episode #{film.episode_id}</div>
      <div className='Title h3 font-grey ml2'>{film.title}</div>
      <div className='Release h6 ml2 font-grey'>({film.release_date})</div>
    </div>
  )
}

export { FilmListItem }
export default FilmListPane