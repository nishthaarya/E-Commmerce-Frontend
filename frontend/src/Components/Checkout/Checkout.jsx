import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./Checkout.module.css"

export const Checkout = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [pin, setPin] = useState("")
    const [statename, setStatename] = useState("")
    const [country, setCountry] = useState("")

    const cart = useSelector((state) => state.cart)

    const {cartItems} = cart


    return (
        <div>
            <div className ={styles.fullbox}>
            <div className = {styles.container}>
            <h2> Shipping Details </h2>
            <div className = {styles.txt} > All fields are required unless mentioned otherwise. </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {name} onChange = {(e) => setName(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Name</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {email} onChange = {(e) => setEmail(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Email</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {number} onChange = {(e) => setNumber(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Mobile</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {address} onChange = {(e) => setAddress(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Address</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {statename} onChange = {(e) => setStatename(e.target.value)} required = {true}/>
                            <span className = {styles.text}>State</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <input required = {true} value = {country} onChange = {(e) => setCountry(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Country</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.forgot}> Not a registered user? <div className = {styles.click}> Register now. </div> </div>
                        <button  className = {styles.submit}>Login</button>
                    </div>
                </div>
            </div>
            <div className = {styles.right}>
                {}
            </div>
        </div>
    )
        </div>
    )
}
