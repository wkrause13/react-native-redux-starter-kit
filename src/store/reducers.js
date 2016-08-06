import { combineReducers } from 'redux'
import {HomeReducer as home}  from '../routes/Home/modules/Home'

export const makeRootReducer = () => {
  return combineReducers({
    home
  })
}

export default makeRootReducer
