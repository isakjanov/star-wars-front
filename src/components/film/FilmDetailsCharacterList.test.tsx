import * as React from 'react'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as sinon from 'sinon'
import FilmDetailsCharacterList from './FilmDetailsCharacterList'

enzyme.configure({ adapter: new Adapter() })

const mockCharacters = [
  {
    id: 1,
    filmIds: [],
    birth_year: '1933',
    eye_color: '',
    films: [],
    gender: 'male',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: 'Chewbacca',
    skin_color: '',
    created: new Date(),
    edited: new Date(),
    species: [],
    starships: [],
    url: '',
    vehicles: ''
  },
  {
    id: 2,
    filmIds: [],
    birth_year: '1933',
    eye_color: '',
    films: [],
    gender: 'male',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: 'Leia Organa',
    skin_color: '',
    created: new Date(),
    edited: new Date(),
    species: [],
    starships: [],
    url: '',
    vehicles: ''
  },
  {
    id: 3,
    filmIds: [],
    birth_year: '1933',
    eye_color: '',
    films: [],
    gender: 'male',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: 'Boba Fett',
    skin_color: '',
    created: new Date(),
    edited: new Date(),
    species: [],
    starships: [],
    url: '',
    vehicles: ''
  }
]

describe('<FilmDetailsCharacterList />', () => {
  it('call fetchFilmCharacters after component has been mounted', () => {
    const fetchFilmCharacters = sinon.spy();

    enzyme.shallow(<FilmDetailsCharacterList
      fetching={false}
      error=''
      characters={[]}
      availableCharacterIds={[1, 3, 4]}
      charactersUrlList={['url/people/1', 'url/people/2']}
      fetchFilmCharacters={fetchFilmCharacters}/>)

    expect(fetchFilmCharacters.calledOnce).toEqual(true)
    expect(fetchFilmCharacters.args[0][0]).toEqual(['url/people/1', 'url/people/2'])
    expect(fetchFilmCharacters.args[0][1]).toEqual([1, 3, 4])

  })

  it('characters should appear in alphabet order', () => {
    const wrapper = enzyme.shallow(<FilmDetailsCharacterList
      fetching={false}
      error=''
      characters={mockCharacters}
      availableCharacterIds={[]}
      charactersUrlList={[]}
      fetchFilmCharacters={() => null}/>)

    expect(wrapper.find('CharacterListItem').length).toEqual(3)
    expect(wrapper.find('CharacterListItem').at(0).prop('character')['name']).toEqual('Boba Fett')
    expect(wrapper.find('CharacterListItem').at(1).prop('character')['name']).toEqual('Chewbacca')
    expect(wrapper.find('CharacterListItem').at(2).prop('character')['name']).toEqual('Leia Organa')
  })
})