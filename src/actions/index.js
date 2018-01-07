import {createAction} from 'redux-action'
import * as Action from './actionTypes'

export const setUser = createAction(Action.SET_USER)
export const getToke = createAction(Action.GET_TOKEN)