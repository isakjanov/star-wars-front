import *  as React from 'react'
import { ICharacterModel } from '../../types/model'
import { Link } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

interface IFilmDetailsCharacterListProps {
  fetching: boolean
  error: string
  characters: ICharacterModel[]
  availableCharacterIds: number[]
  charactersUrlList: string[]
  fetchFilmCharacters: (urlList: string[], availableCharacterIds: number[]) => void
}

class FilmDetailsCharacterList extends React.Component<IFilmDetailsCharacterListProps> {
  constructor(props: IFilmDetailsCharacterListProps) {
    super(props)
  }

  public componentDidMount() {
    const { charactersUrlList, availableCharacterIds, fetchFilmCharacters } = this.props
    fetchFilmCharacters(charactersUrlList, availableCharacterIds)
  }

  public render() {
    const { characters, fetching, error } = this.props

    return (
      <div>
        {fetching && (
          <MoonLoader
            sizeUnit={'px'}
            size={18}
            color={'#2196F3'}
            loading={fetching}
          />
        )}
        {error && (
          <div>{error}</div>
        )}

        {characters
          .sort(this.compareCharactersName)
          .map(it => (
          <CharacterListItem character={it}/>
        ))}
      </div>
    )
  }

  private compareCharactersName = (ch1: ICharacterModel, ch2: ICharacterModel): number => {
    if (ch1.name > ch2.name) {
      return 1
    }
    if (ch1.name < ch2.name) {
      return -1
    }
    return 0
  }
}

interface ICharacterListItemProps {
  character: ICharacterModel
}

const CharacterListItem = (props: ICharacterListItemProps) => {
  const { character } = props
  return (
    <div className='mt1 pb1 bb-light-grey'>
      <Link to={`/people/${character.id}`} className='pl1'>
        {character.name}
      </Link>
    </div>
  )
}

export default FilmDetailsCharacterList