import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "../actionTypes/cartActionTypes";

const initState = {
    cart: []
}


export const cartReducer = (state = initState, {type, payload}) => {
    console.log("reducer")
    switch(type) {

        case ADD_TO_CART:
            const item = payload;

            const itemExist = state.cart.find((el) => el._id === item._id)

            if(itemExist) {
                return {
                    ...state,
                    cart: state.cart.map((el) => 
                    el._id === itemExist._id ? item : el
                    )
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, item]
                }
            }

        case REMOVE_FROM_CART:
            //console.log(state, "remove")
            return {
                ...state,
                cart: state.cart.filter((el) => 
                    el._id !== payload
                )
            }

            case RESET_CART:
                console.log(state, "remove")
                return {
                    ...state,
                    cart: payload
                }

        default:
            return state;
    }
}