import React, { useState } from 'react';
import { Errors } from './Errors';
import { StyledLogin } from './Login.styled';
//import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [errormsg, setErrormsg] = useState([])
    
    
    const doRegister = () => {
        if(password !== password1) {
            const err = "Passwords did not match!"
            if(!errormsg.includes(err)){
                setErrormsg(current => [...current, err])
            }
        }
        /*
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
            setErrormsg("wrong username or password");
        });
        */
    };

    
    return (
        <StyledLogin>
            <div className="container">
                <h1>Registrer</h1>
            </div>
            <div className="login-form container">
                <form>
                    <label htmlFor='usr'>Email </label><br/>
                    <input type='text' id='usr' name='email' onChange={event=> setEmail(event.target.value)} value={email}></input><br/>
                    <label htmlFor='pwd'>Passord </label><br/>
                    <input type='password' id='pwd' name='password' onChange={event=> setPassword(event.target.value)} value={password}></input><br/>
                    <label htmlFor='pwd'>Bekreft passord </label><br/>
                    <input type='password' id='pwd1' name='password' onChange={event=> setPassword1(event.target.value)} value={password1}></input>
                </form>
                <br/><button onClick={() => doRegister()}>Register</button>
            </div>
            <Errors errormsg={errormsg}/>
        </StyledLogin>
        
    );
};
export { Register }