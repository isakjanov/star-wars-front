import * as React from 'react'
import * as enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import FilmListPane, { FilmListItem } from './FilmListPane'
import { IFilmModel } from '../../types/model'
import { MoonLoader } from 'react-spinners'

enzyme.configure({ adapter: new Adapter() })

const mockFilms: { [key: string]: IFilmModel } = {
  5: {
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
  },
  4: {
    id: 4,
    title: 'The Phantom Menace',
    episode_id: 1,
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
}


describe('<FilmListPane />', () => {

  it('renders all film items correctly', () => {
    const wrapper = enzyme.shallow(<FilmListPane
      fetching={false}
      error={''}
      items={mockFilms}
      onComponentMount={() => null}/>)

    expect(wrapper.find('FilmListItem').length).toEqual(2)
    expect(wrapper.find('FilmListItem').at(0).prop('film')).toEqual(mockFilms['4'])
    expect(wrapper.find('FilmListItem').at(1).prop('film')).toEqual(mockFilms['5'])
  })

  it('renders spinner while films are being loaded', () => {
    const wrapper = enzyme.shallow(<FilmListPane
      fetching={true}
      error={''}
      items={{}}
      onComponentMount={() => null}/>)

    expect(wrapper.find(MoonLoader).length).toEqual(1)
    expect(wrapper.find(MoonLoader).prop('loading')).toEqual(true)

    wrapper.setProps({fetching: false})
    expect(wrapper.find(MoonLoader).prop('loading')).toEqual(false)
  })

  it('renders error message if exists', () => {
    const wrapper = enzyme.shallow(<FilmListPane
      fetching={false}
      error={'test error message'}
      items={{}}
      onComponentMount={() => null}/>)

    expect(wrapper.html()).toContain('test error message')

    wrapper.setProps({error: ''})
    expect(wrapper.html()).not.toContain('test error message')
  })

  it('call onComponentMout props\`s method', () => {
    const onComponentMout = sinon.spy()
    enzyme.shallow(<FilmListPane
      fetching={false}
      error={'test error message'}
      items={{}}
      onComponentMount={onComponentMout}/>)

    expect(onComponentMout.calledOnce).toEqual(true)
  })
})

describe('<FilmListItem/>', () => {
  it('should display all fields properly', () => {
    const wrapper = enzyme.shallow(<FilmListItem film={mockFilms[5]}/>)

    expect(wrapper.find('.Episode').text()).toEqual(`Episode #${mockFilms[5].episode_id}`)
    expect(wrapper.find('.Title').text()).toEqual(mockFilms[5].title)
    expect(wrapper.find('.Release').text()).toEqual(`(${mockFilms[5].release_date})`)
  })
})