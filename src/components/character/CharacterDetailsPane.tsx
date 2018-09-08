import * as React from 'react'
import { ICharacterModel } from '../../types/model'
import { RouteComponentProps } from 'react-router'

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
    return (
      <div>
        <div onClick={this.props.routeProps.history.goBack}>Go Back</div>
        Character Details
        {this.props.fetching && (<div>fetching</div>)}
        {this.props.error && (<div>{this.props.error}</div>)}
        {this.props.character && Object.keys(this.props.character).map(key => (
          <div>{key}: {this.props.character && this.props.character[key]}</div>
        ))}
      </div>
    )
  }
}

export default CharacterDetailsPane