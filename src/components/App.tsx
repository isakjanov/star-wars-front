import * as React from 'react'
import {
  Route,
  Switch
} from 'react-router'
import FilmPane from './film/FilmPane'

class App extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <div>Star wars</div>
        <Switch>
          <Route path='/films' component={FilmPane}/>
          <Route path='/' component={FilmPane}/>
        </Switch>
      </div>
    )
  }
}

export default App