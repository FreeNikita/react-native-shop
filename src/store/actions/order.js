import { ADD_ORDER } from "../types";

export const actions = {
  [ADD_ORDER]: (state, payload) => {
    const {items, amount} = payload
    const { orders} = state

    return {
      ...state,
      orders: [
        ...orders,
        {
          id: new Date().toString(),
          items,
          amount,
          date: new Date().toLocaleDateString('en-EN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }
      ]
    }
  },
  default: (state) => state
}