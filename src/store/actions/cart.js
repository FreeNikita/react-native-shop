import { ADD_ORDER, ADD_TO_CART, DELETE_PRODUCT, REMOVE_FROM_CART } from "../types";

export const actions = {
  [ADD_TO_CART]: (state, payload) => {
    const {product} = payload
    const {price, title, id} = product
    const {items, totalAmount} = state
    let newCartItem

    if (items[id]) {
      const {sum, quantity} = items[id]
      newCartItem = {
        ...items[id],
        sum: sum + price,
        quantity: quantity + 1,
        id,
      }
    } else {
      newCartItem = {
        quantity: 1,
        price: price,
        title: title,
        sum: price,
        id,
      }
    }

    return {
      ...state,
      totalAmount: totalAmount + price,
      items: {
        ...items,
        [id]: newCartItem,
      },
    }
  },
  [REMOVE_FROM_CART]: (state, payload) => {
    const {id} = payload
    let {items, totalAmount} = state
    let item = items[id]

    const {price, quantity} = item

    if (item.quantity === 1) {
      delete items[id]
    } else {
      items = {
        ...items,
        [id]: {
          ...item,
          quantity: quantity - 1,
          sum: item.sum - price
        }
      }
    }

    return {
      ...state,
      items,
      totalAmount: totalAmount - price,
    }
  },
  [ADD_ORDER]: () => {
    return {
      items: {},
      totalAmount: 0,
    }
  },
  [DELETE_PRODUCT]: (state, payload) => {
    const { id } = payload
    const { items, totalAmount } = state
    if( items[id] ){
      const { sum } = items[id]
      delete items[id]
      return {
        ...state,
        items,
        totalAmount: totalAmount - sum,
      }
    }
    return state
  },
  default: (state) => state
}