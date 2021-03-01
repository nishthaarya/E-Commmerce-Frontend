import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/actions/cartActions";
import styles from "./Cart.module.css"

export const CartItem = ({item}) => {
    
    const dispatch = useDispatch()

    const handleQty = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeCart = (id) => {
        console.log(id, "Remove cart")
        dispatch(removeFromCart(id))
    }

    return (
        <div className = {styles.cartitem}>
            <div className = {styles.itemleft}>
                <img src = {item.images[0]} className = {styles.imgleft}/>
            </div>
            <div className = {styles.itemright}>
                <div className = {styles.itemname}> {item.name} </div>
                <div className = {styles.itemprice}>${item.price} </div>
                <select  className = {styles.select} value = {item.qty} onChange = {(e) => handleQty(item, e.target.value)} >
                    {[...Array(item.inStock).keys()].map((x) => (
                        <option value = {x+1}> {x+1} </option>
                    ))}
                </select>
                <br/>
                <button onClick = {(id) => removeCart(item._id)} className = {styles.delete}>Remove Item
                </button>
            </div>
        </div>
    )
}