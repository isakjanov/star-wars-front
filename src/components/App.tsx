import * as React from 'react'
import {
  Route,
  Switch
} from 'react-router'
import FilmPane from './film/FilmPane'
import CharacterPane from './character/CharacterPane'
import { Link } from 'react-router-dom'

class App extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className='App clearfix'>
        <div className='bg-grey p1'>
          <Link to='/'>
            <div className='font-yellow h2'>Star wars</div>
          </Link>
        </div>
        <Switch>
          <Route path='/films' component={FilmPane}/>
          <Route path='/people' component={CharacterPane}/>
          <Route path='/' component={FilmPane}/>
        </Switch>
      </div>
    )
  }
}

export default App