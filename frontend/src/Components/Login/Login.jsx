import axios from 'axios';
import React, { useState } from 'react'
import {Redirect, useHistory} from "react-router-dom"
import styles from "./Login.module.css";
import {ToastContainer, toast, Zoom} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux"
import { fetchLoginSuccess } from '../../Redux/actions/authActions';

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const history = useHistory()
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuth)

    const handleClick = () => {
        history.push("/register")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email.length < 6) {
            toast("Email is invalid.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
              })
        }

        if(pass.length < 6) {
            toast("Password is invalid.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
              })
        }

        else {
            let payload = {
                "email": email,
                "password": pass
            }
    
            let config = {
                method: "post",
                url: "http://localhost:4000/api/user/login",
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
    
            axios(config)
            .then((res) => {
                dispatch(fetchLoginSuccess(res.data))
            })
            .catch((err) => {
                toast(`${err.response.data}`, {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_CENTER,
                    transition: Zoom
                  })
            })
        }
    }

    return (
        <div className ={styles.fullbox}>
            <ToastContainer/>
            <div className = {styles.container}>
                <h2>Sign in</h2>
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
                        <div className = {styles.forgot}> Not a registered user? <div onClick = {handleClick} className = {styles.click}> Register now. </div> </div>
                        <button onClick = {handleSubmit} className = {styles.submit}>Login</button>
                    </div>
                </div>
            </div>
            {
                isAuth && <Redirect to = "/profile"/>
            }
        </div>
    )
}

export default Login

