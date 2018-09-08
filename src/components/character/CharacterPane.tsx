import * as React from 'react'
import {
  Route,
  RouteComponentProps,
  Switch
} from 'react-router'
import CharacterDetailsPane from '../../containers/character/CharacterDetailsPane'

const CharacterPane = (props: RouteComponentProps<any>) => (
  <div>
    <Switch>
      <Route path='/people/:id' component={CharacterDetailsPane}/>
    </Switch>
  </div>
)

export default CharacterPane