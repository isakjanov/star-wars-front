import * as React from 'react'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as sinon from 'sinon'
import { IFilmModel } from '../../types/model'
import FilmDetailsPane from './FilmDetailsPane'
import FilmDetailsCharacterList from '../../containers/film/FilmDetailsCharacterList'
import { MoonLoader } from 'react-spinners'

enzyme.configure({ adapter: new Adapter() })

const mockFilm: IFilmModel = {
  id: 5,
  title: 'Attack of the Clones',
  episode_id: 2,
  opening_crawl: 'test description',
  director: 'George Lucas',
  producer: 'Rick McCallum',
  release_date: '2002-05-16',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: new Date('2014-12-20T10:57:57.886000Z'),
  edited: new Date('2015-04-11T09:45:01.623982Z'),
  url: 'test url'
}


describe('<FilmDetailsPane />', () => {
  it('renders all film items correctly', () => {
    const wrapper = enzyme.shallow(<FilmDetailsPane
      filmId='5'
      filmItem={mockFilm}
      fetching={false}
      error=''
      fetchFilmDetails={() => null}/>)

    expect(wrapper.find('.Title').text()).toEqual(mockFilm.title)
    expect(wrapper.find('.Episode').text()).toEqual(mockFilm.episode_id.toString())
    expect(wrapper.find('.Director').text()).toEqual(mockFilm.director)
    expect(wrapper.find('.Producer').text()).toEqual(mockFilm.producer)
    expect(wrapper.find('.Release').text()).toEqual(mockFilm.release_date)
    expect(wrapper.find('.Description').text()).toEqual(mockFilm.opening_crawl)
  })

  it('pass correct props to FilmDetailsCharacterList', () => {
    const wrapper = enzyme.shallow(<FilmDetailsPane
      filmId='5'
      filmItem={mockFilm}
      fetching={false}
      error=''
      fetchFilmDetails={() => null}/>)

    expect(wrapper.find(FilmDetailsCharacterList).length).toEqual(1)
    expect(wrapper.find(FilmDetailsCharacterList).prop('filmId')).toEqual(5)
  })

  it('should call fetchFilmDetails with right arguments', () => {
    const fetchFilmDetails = sinon.spy()
    enzyme.shallow(<FilmDetailsPane
      filmId='5'
      fetching={false}
      error=''
      fetchFilmDetails={fetchFilmDetails}/>)

    expect(fetchFilmDetails.callCount).toEqual(1)
    expect(fetchFilmDetails.args[0][0]).toEqual(5)
  })

  it('should not call fetchFilmDetails if filmItem is specified', () => {
    const fetchFilmDetails = sinon.spy()
    enzyme.shallow(<FilmDetailsPane
      filmId='5'
      filmItem={mockFilm}
      fetching={false}
      error=''
      fetchFilmDetails={fetchFilmDetails}/>)

    expect(fetchFilmDetails.callCount).toEqual(0)
  })

  it('should show error if it exists', () => {
    const wrapper = enzyme.shallow(<FilmDetailsPane
      filmId='5'
      fetching={false}
      error='test error'
      fetchFilmDetails={() => null}/>)

    expect(wrapper.html()).toContain('test error')
  })

  it('should show a spinner a film is fetching', () => {
    const wrapper = enzyme.shallow(<FilmDetailsPane
      filmId='5'
      fetching={true}
      error=''
      fetchFilmDetails={() => null}/>)

    expect(wrapper.find(MoonLoader).prop('loading')).toEqual(true)

    wrapper.setProps({'fetching': false})
    expect(wrapper.find(MoonLoader).prop('loading')).toEqual(false)
  })
})