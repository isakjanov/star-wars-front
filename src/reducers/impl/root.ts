import { combineReducers } from 'redux'
import { filmReducer } from './film/index'

const rootReducer = combineReducers({
  film: filmReducer
})

export default rootReducer