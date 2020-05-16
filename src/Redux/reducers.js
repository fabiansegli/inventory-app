import { combineReducers } from 'redux'
import store from './store'

const products = (state= [], action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default combineReducers({
    products
})