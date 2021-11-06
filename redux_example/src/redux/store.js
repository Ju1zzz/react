import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer } from './reducer'

const initStore = {
    tasks: []
}
export const store = createStore(reducer, initStore, composeWithDevTools());