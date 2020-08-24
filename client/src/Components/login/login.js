import React, {useState, useEffect} from "react"
import { Login } from '../../redux/actions.js'
import { connect } from "react-redux";
import "./login.css"

const LoginPage = ({Login, user}) => {
    const [values, setValues] = useState({
        name: ""
    })

    const handleChange = e => {
        setValues({[e.target.name]: e.target.value}) 
        console.log("values", values)       
    }    

    const Submit = e => {
        e.preventDefault()
        Login(values)
    }    
    
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-offset-5 col-md-3">
                    <div class="form-login">
                        <h4>Welcome back.</h4>
                            <input onChange={handleChange} name="name" value={values.name} type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />                            
                            <div class="wrapper">
                                <span class="group-btn">     
                                    <a href="#" onClick={Submit} class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>
                                </span>
                            </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {Login})(LoginPage)