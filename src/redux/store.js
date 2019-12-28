import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import counterReducer from './counterReducer'

const reducer = combineReducers({counter: counterReducer})
const store = createStore(reducer, composeWithDevTools())
export default store
window.store = store;