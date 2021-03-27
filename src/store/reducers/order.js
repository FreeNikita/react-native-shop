import { actions } from "../actions/order";

const initialState = {
  orders: []
}

export default (state = initialState, action) => {
  const dispatch = actions[action.type] || actions.default

  return dispatch(state, action.payload)
}