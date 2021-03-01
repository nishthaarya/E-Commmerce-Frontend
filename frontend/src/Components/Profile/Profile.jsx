import React, { useEffect, useState } from 'react'
import styles from "./Profile.module.css"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { useGet } from '../../Hooks/useGet'
import { logoutRequest } from '../../Redux/actions/authActions'
import { Redirect } from 'react-router-dom'

const Profile = () => {

    const token = useSelector(state => state.auth.token)
    const auth = useSelector(state => state.auth.isAuth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("logging out")
        dispatch(logoutRequest())
    }
    
    useEffect(() => {
        let config = {
            method: "get",
            url: "http://localhost:4000/api/user/details",
            headers: {
                "Authorization": "Bearer " + token
            }
        }

        axios(config)
        .then((res) => {
            setName(res.data.user.name)
            setEmail(res.data.user.email)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            {
                auth ? <div>
                    <h1>Profile</h1>
                    <h2> Welcome, {name} </h2>
                    <h3> Email: {email} </h3>
                </div> : <Redirect to = "/login"/>
            }
            <button onClick = {handleLogout}> Logout </button>
        </div>
    )
}

export default Profile
