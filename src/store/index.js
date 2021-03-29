import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/products'
import cartReducer from './reducers/cart'
import orderReducer from './reducers/order'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk), composeWithDevTools())
