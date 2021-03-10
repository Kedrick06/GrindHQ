import React from 'react'
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import {auth, provider } from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://i.ibb.co/W0m8XsF/bfblk-buffalo.png" alt=""/>
                <h1>Sign in to The GrindHQ</h1>
                <p>Grind.BuffaloBlack.com</p>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
background-color: white;
border-radius: 10px;
text-align: center;
box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0,0.24);

>img {
    object-fit:contain;
    height: 100px;
    margin-bottom:40px;
}
>button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;

}
`