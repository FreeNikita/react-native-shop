import { DELETE_PRODUCT } from "../types";

export const actions = {
  [DELETE_PRODUCT]: (state, payload) => {
    const { id } = payload;
    return {
      ...state,
      availableProducts: state.availableProducts.filter(product => product.id !== id),
      userProducts: state.availableProducts.filter(product => product.id !== id)
    }
  },
  default: (state) => state
}