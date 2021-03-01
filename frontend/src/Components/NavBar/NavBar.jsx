import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css"


export const NavBar = ({click}) => {

    const history = useHistory()
    const cart = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth.isAuth)

    const getCartQty = () => {
        return cart.cart.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const handleClick = () => {
        history.push("/")
    }
    return (
        <div className = {styles.navbar} >
            <div className = {styles.logo}>
                <h2 onClick = {handleClick} > PinkkTreat </h2>
            </div>

            <ul className = {styles.links}>
                <li>
                    <Link to = "/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = "/login">
                        { auth ? "Account" : "Login" }
                    </Link>
                </li>
                <li>
                    <Link to = "/contact">
                        Contact
                    </Link>
                </li>
                <li className = {styles.cartlink} >
                    <Link to = "/cart">
                        <i className = "fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className = {styles.cart_badge}> {getCartQty()} </span>
                        </span>
                    </Link>
                </li>
            </ul>

            <div className = {styles.lines} onClick = {click} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}