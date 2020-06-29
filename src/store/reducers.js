import { combineReducers } from 'redux'
import reducerInfoWorld from './ducks/infoWorld'

export default combineReducers({
    covid19_World: reducerInfoWorld
})