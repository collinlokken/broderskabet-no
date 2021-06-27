import React, { useState } from 'react';
import { StyledLogin } from './Login.styled';
import { Errors } from './Errors';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormsg, setErrormsg] = useState("")
    
    
    const dologin = () => {
        axios.post('api/token/', {
            'email':email,
            'password':password
        })
        .then((res) => {
            var storage = window.localStorage;
            storage.setItem('access',res.data['access']);
            storage.setItem('refresh',res.data['refresh']);
            window.location = '/'
        })
        .catch((error) => {
            const err = "Wrong username or password";
            if(!errormsg.includes(err)){
                setErrormsg(current => [...current, err])
            }
        });
    };

    return (
        <StyledLogin>
            <div className="container">
                <h1>Login</h1>
            </div>
            <div className="login-form container">
                <form>
                    <label htmlFor='usr'>Email </label><br/>
                    <input type='text' id='usr' name='email' onChange={event=> setEmail(event.target.value)} value={email}></input><br/>
                    <label htmlFor='pwd'>Password </label><br/>
                    <input type='password' id='pwd' name='password' onChange={event=> setPassword(event.target.value)} value={password}></input>
                </form>
                <br/><button onClick={() => dologin()}>Login</button>
            </div>
            <Errors errormsg={errormsg}/>
        </StyledLogin>
        
    );
};
export { Login }