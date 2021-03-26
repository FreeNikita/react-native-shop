import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/products'
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools())