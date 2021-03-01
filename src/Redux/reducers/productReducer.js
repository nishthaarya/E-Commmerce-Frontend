import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQ, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_DETAILS_FAIL, GET_PRODUCTS_DETAILS_REQ, GET_PRODUCTS_DETAILS_SUCCESS, GET_PRODUCTS_DETAILS_RESET } from "../actionTypes/productActionTypes";

const initState = {
    products: [],
    loading: false,
    error: false
}

export const productReducer = (state = initState, {type, payload}) => {
    switch(type) {

        case GET_PRODUCTS_REQ:
            return {
                ...state,
                loading: true,
                products: []
            }
        
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload
            }
        
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}

export const productDetailsReducer = (state = {item: {}}, {type, payload}) => {
    switch(type) {

        case GET_PRODUCTS_DETAILS_REQ:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                ...state,
                item: payload
            }

        case GET_PRODUCTS_DETAILS_FAIL:
            return {
                ...state,
                error: true
            }

        case GET_PRODUCTS_DETAILS_RESET:
            return {
                ...state,
                item: {}
            }
        default:
            return state
    }
}