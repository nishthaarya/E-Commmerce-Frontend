import React from 'react'
import styles from "./Confirm.module.css"

export const Confirm = () => {
    return (
        <div className = {styles.full} >
            <div>
                <h1 style ={{color: "white"}} > Your order has been placed! </h1>
            </div>
        </div>
    )
}
