import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products'

const rootReducer = combineReducers({
    products: productsReducer,
})

export const store = createStore(rootReducer)