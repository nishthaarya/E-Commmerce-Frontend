import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "../actionTypes/cartActionTypes";

export const addToCart = (data, qty) => (dispatch, getState) => {


    dispatch({
        type: ADD_TO_CART,
        payload: {
            _id: data._id,
            name: data.name,
            images: data.images,
            price: data.price,
            inStock: data.inStock,
            qty
        }
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cart))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cart))
}

export const emptyCart = () => {
    console.log("action")
    return {
        type: RESET_CART,
        payload: []
    }
}