import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    function resetForm(){
        setState({name: "", email: "", message: ""})
    }

    function changeHandler(event) {
        setState({...state, [event.target.name]: event.target.value})
    }

    function handleSubmit(event)  {
        event.preventDefault()
        console.log(state)
        axios
        .post("http://localhost:5000/send", state)
        .then(res => {
            if (res.data.status === 'success') {
                window.alert("Message Sent")
                resetForm()
            } else if(res.data.status === 'fail'){
                window.alert("Message failed to send")
            }
        })
    }

    console.log("state", state)

    return (
        <div className='contactbody'>
            <form id="contactform" onSubmit={handleSubmit} method="POST">
                <div className="formgroup">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" className="formcontrol" value={state.name} onChange={changeHandler} />
                </div>
                <div className="formgroup">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input name="email" type="email" className="formcontrol" aria-describedby="emailHelp" value={state.email} onChange={changeHandler} />
                </div>
                <div className="formgroup">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="formcontrol" rows="5"  value={state.message} onChange={changeHandler} />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact