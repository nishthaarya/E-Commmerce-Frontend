import React, { useState } from 'react'
import styles from "./Contact.module.css"
import axios from "axios"

export const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [err, setErr] = useState(false)

    const resetForm = () => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === "" || email === "" || subject === "" || message === "" ) {
            setErr(true)
        }
        else {
            let data = {
                "name": name,
                "email": email,
                "subject": subject,
                "message": message
            }
    
            let config = {
                method: "post",
                url: "http://localhost:4000/email",
                headers: {
                    "Content-Type": "application/json"
                },
                data: data
            }
    
            axios(config)
            .then((res) => alert("Done") )
            .catch((err) => console.log(err))
    
            alert("Done")
            setErr(false)
            resetForm()
        }
    }

    return (
        <div className = {styles.full} >
            <div className = {styles.container}>
                <h2>Contact Us!</h2>
                {err && ( <div className = {styles.err}> Please fill in all the fields. </div> ) }
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
                            <input required = {true} value = {subject} onChange = {(e) => setSubject(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Subject</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <div className = {styles.inputbox}>
                            <textarea required = {true} value = {message} onChange = {(e) => setMessage(e.target.value)} required = {true}/>
                            <span className = {styles.text}>Message</span>
                            <span className = {styles.line}></span>
                        </div>
                    </div>
                </div>
                <div className = {styles.row}>
                    <div className = {styles.col}>
                        <button onClick = {handleSubmit} className = {styles.submit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

