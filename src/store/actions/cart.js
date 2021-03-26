import { ADD_TO_CART } from "../types";

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
        quantity: quantity + 1
      }
    } else {
      newCartItem = {
        quantity: 1,
        price: price,
        title: title,
        sum: price
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
  default: (state) => state
}