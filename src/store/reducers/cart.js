import { actions } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
}

export default (state = initialState, action) => {
  const dispatch = actions[action.type] || actions.default

  return dispatch(state, action.payload)
}