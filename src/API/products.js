import { CREATE_PRODUCT, DELETE_PRODUCT, SET_OWN_PRODUCTS, SET_PRODUCTS, UPDATE_PRODUCT } from "../store/types";
import { MAIN_URL } from "./constants";
import { OWNER_ID } from "../constants/MOCK";

export const createProduct = (data) => async(dispatch) => {
  try {
    const response = await fetch(`${MAIN_URL}products.json`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error("Somethings want Wrong!")

    dispatch({
      type: CREATE_PRODUCT,
      payload: {id}
    })
  } catch (error) {

  }
};

export const setProducts = () => async(dispatch) => {
  try {
    const response = await fetch(`${MAIN_URL}products.json`)
    if (!response.ok) throw new Error("Somethings want Wrong!")
    const resDate = await response.json()
    const availableProducts = Object.entries(resDate).map(([key, value]) => ({
      id: key,
      ...value
    }))

    dispatch({
      type: SET_PRODUCTS,
      payload: {
        availableProducts
      }
    })
  } catch (error) {

  }
};

export const setOwnProducts = () => async(dispatch) => {
  try {
    const response = await fetch(`${MAIN_URL}products.json`)
    if (!response.ok) throw new Error("Somethings want Wrong!")
    const resDate = await response.json()
    const userProducts = Object.entries(resDate).map(([key, value]) => ({
      id: key,
      ...value
    })).filter(({ownerId}) => ownerId === OWNER_ID)

    dispatch({
      type: SET_OWN_PRODUCTS,
      payload: {
        userProducts,
      }
    })
  } catch (error) {

  }
};

export const updateProducts = ({id, ...field}) => async(dispatch) => {
  try {
    const response = await fetch(`${MAIN_URL}products/${id}.json`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(field)
    })
    if (!response.ok) throw new Error("Somethings want Wrong!")
    const resDate = await response.json()

    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        ...resDate,
        id
      }
    })
  } catch (error) {

  }
};

export const deleteProducts = ({id}) => async(dispatch) => {
  try {
    const response = await fetch(`${MAIN_URL}products/${id}.json`, {
      method: "DELETE",
    })
    if (!response.ok) throw new Error("Somethings want Wrong!")
    const resDate = await response.json()

    dispatch({
      type: DELETE_PRODUCT,
      payload: {id}
    })
  } catch (error) {

  }
};