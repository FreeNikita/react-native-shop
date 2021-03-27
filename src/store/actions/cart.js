import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

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
    const { id } = payload
    let { items, totalAmount } = state
    let item = items[id]

    const { price, quantity } = item

    if(item.quantity === 1) {
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

    console.log('totalAmount - price', totalAmount - price)

    return {
      ...state,
      items,
      totalAmount: totalAmount - price,
    }
  },
  default: (state) => state
}