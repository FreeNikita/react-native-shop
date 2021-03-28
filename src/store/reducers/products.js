import { PRODUCTS } from "../../data/dummy-data";
import { actions } from "../actions/products";
import { OWNER_ID } from '../../constants/MOCK'

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(({ownerId}) => ownerId === OWNER_ID)
}

export default ( state = initialState, action) => {
    const dispatch = actions[action.type] || actions.default

    return dispatch(state, action.payload)
}