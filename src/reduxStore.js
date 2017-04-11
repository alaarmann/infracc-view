import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()
const store = createStore(app,
  applyMiddleware(
    sagaMiddleware,
    loggerMiddleware // neat middleware that logs actions
  ))

sagaMiddleware.run(saga)

export default store
