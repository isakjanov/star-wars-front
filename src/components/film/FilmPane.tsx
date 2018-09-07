import * as React from 'react'
import {
  Route,
  RouteComponentProps,
  Switch
} from 'react-router'
import FilmListPane from '../../containers/film/FilmListPane'
import FilmDetailsPane from '../../containers/film/FilmDetailsPane'

const FilmPane = (props: RouteComponentProps<any>) => (
  <div>
    <Switch>
      <Route path='/films/:id' component={FilmDetailsPane}/>
      <Route path='/' component={FilmListPane}/>
    </Switch>
  </div>
)

export default FilmPane