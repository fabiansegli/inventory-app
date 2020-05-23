import { combineReducers } from 'redux'
import store from './store'

const products = (state= [], action) => {
    switch(action.type) {
        case 'CHANGE_STOCK': 
            let newArray = state;
            let index = newArray.findIndex(product => action.value.Name === product.Name)
            newArray[index] = action.value
            return newArray
        default: 
            return state
    }
}

export default combineReducers({
    products
})