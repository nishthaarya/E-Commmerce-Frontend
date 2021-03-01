import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { emptyCart } from "../../Redux/actions/cartActions";
import styles from "./Cart.module.css"
import { CartItem } from "./CartItem";
import {ToastContainer, toast, Zoom} from "react-toastify"

export const Cart = () => {

    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.email)
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    const history = useHistory()
    const auth = useSelector(state => state.auth.isAuth)


    const getCartQty = () => {
        return cart.cart.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartTotal = () => {
        return cart.cart.reduce((price, item) => item.price * item.qty + price, 0)
    }

    const checkoutHandle = () => {
        history.push("/checkout")
    }

    const paymentHandler = async (e) => {
        e.preventDefault()

        if(auth) {
            const API_URL = "http://localhost:4000/";
            const orderUrl = `${API_URL}order`;
            const response = await Axios.get(orderUrl)
            const {data} = response;
    
            const options = {
                name: "PinkkTreat Razorpay",
                description: "Integration of RazorPay",
                order_id: data.id,
                handler: async (response) => {
                    try {
                        const paymentId = response.razorpay_payment_id;
                        const url = `${API_URL}capture/${paymentId}`;
                        const captureResponse = await Axios.post(url, {})
                        const successObj = JSON.parse(captureResponse.data)
                        const captured = successObj.captured;
    
                        if(captured) {
                            console.log("Successfully captured the payment")
                            dispatch(emptyCart())
                            history.push("/confirm")
                        }
                    } catch (error) {
                        console.log("Error, could not capture payment", error)
                    }
                },
                theme: {
                    color: "pink"
                }
            }
    
            const rzp1 = new window.Razorpay(options);
            rzp1.open()
        }

        else {
            toast("Please login or register to checkout.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
              })
        }
    }

    const handleEmail = () => {
        let data = {
            "email": email
        }

        let config = {
            method: "post",
            url: "http://localhost:4000/confirmationmail",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        }

        Axios(config)
        .then((res) => alert("Done") )
        .catch((err) => console.log(err))
    }

    return (
        <div className = {styles.full}>
            <ToastContainer/>
            <div className = {styles.cartpage} >
            {
                cart.cart.length === 0 ? (
                    <div className = {styles.empty} > <div>Your cart is empty! <Link to = "/">Go back</Link></div> </div>
                ) : cart.cart.map((item) => (
                    <CartItem item = {item} />
                ))
            }
            </div>
            <div className = {styles.right}>
                <div className = {styles.info}>
                    <div className = {styles.total}> Subtotal: {getCartTotal().toFixed(2)} $ </div>
                    <div className = {styles.total}> Items: {getCartQty()}</div>
                </div>
                <button onClick = {paymentHandler} className = {styles.checkout}>Proceed to checkout</button>
            </div>
        </div>
    )
}