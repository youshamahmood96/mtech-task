import {combineReducers} from 'redux'
import {cartReducer} from './cartReducer'
import {modalReducer} from './modalReducer'
const rootReducer = combineReducers({cartReducer,modalReducer})
export default rootReducer