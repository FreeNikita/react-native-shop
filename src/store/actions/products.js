import { SET_PRODUCTS, SET_OWN_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../types";

export const actions = {
  [SET_PRODUCTS]: (state, payload) => {
    const { availableProducts } = payload

    return {
      ...state,
      availableProducts: [...state.availableProducts, ...availableProducts],
    }
  },
  [SET_OWN_PRODUCTS]: (state, payload) => {
    const { userProducts } = payload

    return {
      ...state,
      userProducts,
    }
  },
  [CREATE_PRODUCT]: (state, payload) => {
    const {availableProducts, userProducts} = state
    return {
      ...state,
      availableProducts: [...availableProducts, payload],
      userProducts: [...userProducts, payload]
    }
  },
  [UPDATE_PRODUCT]: (state, payload) => {
    const {availableProducts, userProducts} = state
    const { id } = payload;

    const productsIndex = availableProducts.findIndex( item => item.id === id)
    const userProductsIndex = userProducts.findIndex( item => item.id === id)

    availableProducts[productsIndex] = {...availableProducts[productsIndex], ...payload}
    userProducts[userProductsIndex] = {...userProducts[userProductsIndex], ...payload}

    return {
      ...state,
      availableProducts,
      userProducts
    }
  },
  [DELETE_PRODUCT]: (state, payload) => {
    const {id} = payload;
    return {
      ...state,
      availableProducts: state.availableProducts.filter(product => product.id !== id),
      userProducts: state.availableProducts.filter(product => product.id !== id)
    }
  },
  default: (state) => state
}