import { createAction } from 'redux-actions'
import { REGISTER_PENDING, DEREGISTER_PENDING, START_ASYNC } from './actionTypes'

export const startAsync = createAction(START_ASYNC, (actionType, actionParam) => ({actionType, actionParam}))

export const registerPending = createAction(REGISTER_PENDING)
export const deregisterPending = createAction(DEREGISTER_PENDING)

