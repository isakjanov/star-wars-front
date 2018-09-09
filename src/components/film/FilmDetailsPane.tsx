import * as React from 'react'
import { IFilmModel } from '../../types/model'
import FilmDetailsCharacterList from '../../containers/film/FilmDetailsCharacterList'
import { MoonLoader } from 'react-spinners'

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
    const { filmItem, filmId, fetchFilmDetails } = this.props
    if (!filmItem) {
      fetchFilmDetails(+filmId)
    }
  }

  public render() {
    const { filmItem, fetching, error } = this.props
    return (
      <div className='p1'>
        {error && (
          <div className='h6 font-red'>{error}</div>
        )}
        <MoonLoader
          sizeUnit={'px'}
          size={18}
          color={'#2196F3'}
          loading={fetching}
        />
        {filmItem && (
          <div className='col-12 flex'>
            <div className='col-6'>
              <div className='my2'>
                {filmItem && (
                  <div className='Title h3 font-blue mr3'>{filmItem.title}</div>
                )}
              </div>

              <div>
                <span className='font-grey'>Episode: </span>
                <span className='Episode'>{filmItem.episode_id}</span>
              </div>
              <div>
                <span className='font-grey'>Director: </span>
                <span className='Director'>{filmItem.director}</span>
              </div>
              <div>
                <span className='font-grey'>Producer: </span>
                <span className='Producer'>{filmItem.producer}</span>
              </div>
              <div>
                <span className='font-grey'>Release date: </span>
                <span className='Release'>{filmItem.release_date}</span>
              </div>
              <div className='mt3'>
                <span className='font-grey'>Description: </span>
                <div className='Description pt1'>{filmItem.opening_crawl}</div>
              </div>
            </div>

            <div className='col-6 pl3'>
              <div className='font-blue h3 my2'>Characters</div>
              <FilmDetailsCharacterList filmId={filmItem.id}/>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default FilmDetailsPane