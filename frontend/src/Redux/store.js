import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { cartReducer } from "./reducers/cartReducer";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { authReducer } from "./reducers/authReducer";

const reducer = combineReducers({
   cart: cartReducer,
   products: productReducer,
   productDetails: productDetailsReducer,
   auth: authReducer
})

const cartLocal = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const initState = {
    cart: {
        cart: cartLocal
    }
}

export const store = createStore(
    reducer, initState, composeWithDevTools(applyMiddleware(thunk))
)

