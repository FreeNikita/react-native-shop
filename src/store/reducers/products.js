import { PRODUCTS } from "../../data/dummy-data";
import { actions } from "../actions/products";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.id === 'u1')
}

export default ( state = initialState, action) => {
    const dispatch = actions[action.type] || actions.default

    return dispatch(state, action.payload)
}