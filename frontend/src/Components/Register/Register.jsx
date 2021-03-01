import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styles from "./Register.module.css";
import {ToastContainer, toast, Zoom} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import * as EmailValidator from "email-validator"

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const [auth, setAuth] = useState(false)
    const [err, setErr] = useState("")
    const history = useHistory()
    

    const handleClick = () => {
        history.push("/login")
        alert.show("Hello")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const ans = EmailValidator.validate(email)

        if(name.length < 3) {
            toast("Please enter your full name.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
              })
        }
        else if(pass.length < 6) {
            toast("Password needs to be at least 6 characters.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
        }

        else if(!ans) {
            toast("Email is invalid.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
        }

        else {
            let payload = {
                "name": name,
                "email": email,
                "password": pass
            }
    
            let config = {
                method: "post",
                url: "http://localhost:4000/api/user/register",
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
    
            axios(config)
            .then((res) => {
                toast("Successfully registered!", {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_CENTER,
                    transition: Zoom
                })
                history.push("/login")
            })
            .catch((err) => {
                toast(`Email already exists. Please login.`, {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_CENTER,
                    transition: Zoom
                })
            })
        }
    }

    return (
        <div className ={styles.fullbox}>
            <div className = {styles.container}>
                <ToastContainer className = {styles.toast} />
                <h2>Sign up</h2>
                {err && <div> {err} </div>  }
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
                            <input required = {true} type = "password" value = {pass} onChange = {(e) => setPass(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Password</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.forgot}> Already a customer? <div onClick = {handleClick} className = {styles.click}> Login here. </div> </div>
                        <button onClick = {handleSubmit} className = {styles.submit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
