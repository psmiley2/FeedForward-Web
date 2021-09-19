import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from "axios"
const cookies = new Cookies();

class Login extends React.Component{
    state={
        email:"",
        password: "",
        classCode: ""
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let body = {
            email: this.state.email,
            password: this.state.password
        }

        await axios.post("http://localhost:8001/login", body)
            .then(res => {
                console.log(res)
                cookies.set('user', res.data._id, { path: '/' });
                cookies.set('studentClass', res.data.classCode, { path: '/' })
                cookies.set('classTitle', res.data.className, {path: "/"})
            }).catch(err => {
                console.error(err)
            })  
    }
    
    render() {return (
        <div class= 'container'>
            <h1>Login</h1>
            <label>If you are already a user enter email and password below</label>
            <br />
            <form onSubmit= {this.handleSubmit}>
                <input type='email' name= 'email' placeholder= 'email' required onChange= {this.handleChange}/>
                <br />
                <input type='password' name= 'password' placeholder= 'password' required onChange= {this.handleChange}/>
                <br />
                <button onSubmit={this.handleSubmit}>Log In</button>
                {/* <Button onSubmit={this.handleSubmit} text = 'Log In' link = '/'/> */}
            </form>
            <br />
            <label>Not Registered? It's quick to sign up!</label>

            <Button color = 'Green' text = 'Register' link = "/register"/>

            <label>Student? Enter Class Code Below</label>
            <form onSubmit= {this.handleStudentSubmit}>
                <input type='classCode' name= 'classCode' placeholder= 'class code' required onChange= {this.handleChange}/>
                <br />
                <Link to= '/student-homepage' onClick={cookies.set('studentClass', this.state.classCode, { path: '/' })}>
                    <button onSubmit={this.handleStudentSubmit} >Submit Class Code</button>
                </Link>

            </form>
        </div>       
    )
    }
}

export default Login
