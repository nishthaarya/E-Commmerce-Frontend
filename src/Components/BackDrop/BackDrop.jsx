import React from "react";
import styles from "./BackDrop.module.css";

export const BackDrop = ({show, click}) => {
    return show &&
        <div className = {styles.backdrop} onClick = {click} >
        </div>
}