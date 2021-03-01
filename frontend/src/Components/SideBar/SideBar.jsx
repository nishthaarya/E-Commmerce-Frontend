import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  "./SideBar.css"

export const SideBar = ({show, click}) => {

    const sideBarClass = ["sidebar"]

    const cart = useSelector((state) => state.cart)

    const getCartQty = () => {
        return cart.cart.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    if(show) {
        sideBarClass.push("show")
    }

    return show &&
        <div className = {sideBarClass.join(" ")}>
            <ul className = "links">
                <li>
                    <Link to = "/" onClick = {click} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = "/login" onClick = {click} >
                        Login
                    </Link>
                </li>
                <li>
                    <Link to = "faq" onClick = {click} >
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link to = "/cart" onClick = {click} >
                        <i className = "fas fa-shopping-cart"></i>
                        <span>
                            Cart 
                            <span> {getCartQty()} </span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
}