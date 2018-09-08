import { combineReducers } from 'redux'
import { filmReducer } from './film/index'
import { characterReducer } from './character/index'

const rootReducer = combineReducers({
  film: filmReducer,
  character: characterReducer
})

export default rootReducer