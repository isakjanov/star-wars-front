import *  as React from 'react'
import { ICharacterModel } from '../../types/model'
import { Link } from 'react-router-dom'

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
        Character list

        {fetching && (
          <div>Fetching</div>
        )}
        {error && (
          <div>Error</div>
        )}

        {characters.map(it => (
          <div key={`char-${it.id}`}>
            <Link to={`/people/${it.id}`}>
              Character: {it.name}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default FilmDetailsCharacterList