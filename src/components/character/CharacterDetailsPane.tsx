import * as React from 'react'
import { ICharacterModel } from '../../types/model'
import { RouteComponentProps } from 'react-router'
import CharacterDetailsPlanet from '../../containers/character/CharacterDetailsPlanet'
import { MoonLoader } from 'react-spinners'

interface ICharacterDetailsPaneProps {
  id: number
  fetching: boolean
  error: string
  character?: ICharacterModel
  fetchCharacter: (id: number) => void
  routeProps: RouteComponentProps<any>
}

class CharacterDetailsPane extends React.Component<ICharacterDetailsPaneProps> {
  constructor(props: ICharacterDetailsPaneProps) {
    super(props)
  }

  public componentDidMount() {
    if (!this.props.character) {
      this.props.fetchCharacter(this.props.id)
    }
  }

  public render() {
    const { character, fetching } = this.props
    return (
      <div className='p1'>
        <div className='font-grey h5 py2 cursor--pointer' onClick={this.props.routeProps.history.goBack}>Go Back</div>

        <MoonLoader
          sizeUnit={'px'}
          size={18}
          color={'#2196F3'}
          loading={fetching}
        />

        {this.props.error && (<div>{this.props.error}</div>)}

        {character && (
          <div className='mt1'>
            <div className='font-blue h3'>{character.name}</div>

            <div className='mt2'>
              <CharacterDetail label='Height:'>{character.height}</CharacterDetail>
              <CharacterDetail label='Weight:'>{character.mass}</CharacterDetail>
              <CharacterDetail label='Hair color:'>{character.hair_color}</CharacterDetail>
              <CharacterDetail label='Eye color:'>{character.eye_color}</CharacterDetail>
              <CharacterDetail label='Gender:'>{character.gender}</CharacterDetail>
              <CharacterDetail label='Planet:'>
                <CharacterDetailsPlanet planetUrl={character.homeworld}/>
              </CharacterDetail>

            </div>
          </div>
        )}
      </div>
    )
  }
}

interface ICharacterDetailProps {
  label: string
  children?: any
}

const CharacterDetail = (props: ICharacterDetailProps) => (
  <div className='flex mt1'>
    <div className='font-grey' style={{width: 200}}>{props.label}</div>
    <div>{props.children}</div>
  </div>
)

export default CharacterDetailsPane