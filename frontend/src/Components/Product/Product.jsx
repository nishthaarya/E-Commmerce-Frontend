import React, { useState } from "react";
import "./Product.css"
import {useHistory} from "react-router-dom"

export const Product = ({item}) => {

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/products/${id}`)
    }

    const [pic, setPic] = useState(item.images[0])

    const changeImg = () => {
        console.log("img")
        setPic(item.images[1])
    }

    const resetImg = () => {
        setPic(item.images[0])
    }

    return (
        <div className = "card">
            <div className = "box">
                <div className = "top">
                    <img className ="image123" src = {pic} onMouseOver = {changeImg} onMouseOut = {resetImg} />
                </div>
                <div className = "bottom">
                    <h2> {item.name} </h2>
                    <h3> $ {item.price} </h3>
                    <button onClick = {(id) => handleClick(item._id)} className = "btn123">View Product</button>
                </div>
            </div>
        </div>
    )
}