import axios from "axios";
import {GET_PRODUCTS_DETAILS_FAIL, GET_PRODUCTS_DETAILS_REQ, GET_PRODUCTS_DETAILS_RESET, GET_PRODUCTS_DETAILS_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQ, GET_PRODUCTS_SUCCESS} from "../actionTypes/productActionTypes"

export const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQ
    }
}

export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsFail = (err) => {
    return {
        type: GET_PRODUCTS_FAIL,
        payload: err
    }
}

export const getProducts = () => (dispatch) => {
    dispatch(getProductsRequest())

    axios.get("http://localhost:4000/api/products")
    .then((res) => dispatch(getProductsSuccess(res.data)))
    .catch((err) => dispatch(getProductsFail(err)))
}

export const getProductDetailsRequest = () => {
    return {
        type: GET_PRODUCTS_DETAILS_REQ
    }
}

export const getProductDetailsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_DETAILS_SUCCESS,
        payload: data
    }
}

export const getProductDetailsFail = (err) => {
    return {
        type: GET_PRODUCTS_DETAILS_FAIL,
        payload: err
    }
}

export const getProductDetails = (id) => (dispatch) => {
    dispatch(getProductDetailsRequest())

    axios.get(`http://localhost:4000/api/products/${id}`)
    .then((res) => dispatch(getProductDetailsSuccess(res.data)))
    .catch((err) => dispatch(getProductDetailsFail(err)))
}

export const removeProduct = () => (dispatch) => {
    dispatch({
        type: GET_PRODUCTS_DETAILS_RESET
    })
}
