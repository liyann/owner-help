import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {persistStore} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'

const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function')
  }
  else {
    console.log('dispatching', action)
  }
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore)

export default function configStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
