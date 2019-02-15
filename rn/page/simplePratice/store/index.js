import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

const middlewareList = [ thunkMiddleware ];

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewareList)
  )
)