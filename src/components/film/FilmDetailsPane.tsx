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
    const { filmItem, fetching } = this.props
    return (
      <div className='p1'>
        {filmItem && (
          <div className='col-12 flex'>
            <div className='col-6'>

              <div className='flex items-center my2'>
                {filmItem && (
                  <div className='h3 font-blue mr3'>{filmItem.title}</div>
                )}
                <MoonLoader
                  sizeUnit={'px'}
                  size={18}
                  color={'#2196F3'}
                  loading={fetching}
                />
              </div>

              <div>
                <span className='font-grey'>Episode: </span>
                <span>{filmItem.episode_id}</span>
              </div>
              <div>
                <span className='font-grey'>Director: </span>
                <span>{filmItem.director}</span>
              </div>
              <div>
                <span className='font-grey'>Producer: </span>
                <span>{filmItem.producer}</span>
              </div>
              <div>
                <span className='font-grey'>Release date: </span>
                <span>{filmItem.release_date}</span>
              </div>
              <div className='mt3'>
                <span className='font-grey'>Description: </span>
                <div className='pt1'>{filmItem.opening_crawl}</div>
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