import { combineReducers } from 'redux'
import { filmReducer } from './film/index'
import { characterReducer } from './character/index'
import { planetReducer } from './planet'

const rootReducer = combineReducers({
  film: filmReducer,
  character: characterReducer,
  planet: planetReducer
})

export default rootReducer