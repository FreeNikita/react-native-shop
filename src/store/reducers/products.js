import { PRODUCTS } from "../../data/dummy-data";
import { OWNER_ID } from '../../constants/MOCK'
import { actions } from "../actions/products";

const initialState = {
    availableProducts: [],
    userProducts: []
}

export default ( state = initialState, action) => {
    const dispatch = actions[action.type] || actions.default

    return dispatch(state, action.payload)
}