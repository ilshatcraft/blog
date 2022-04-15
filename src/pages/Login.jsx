import React from 'react';
import MyButton from '../UI/button/MyButton';

import {auth, provider} from "../firebase-config"
import { signInWithPopup } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

let navigate = useNavigate();


const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem("isAuth",true)
            setIsAuth(true)
            navigate("/")
    })
};

    return (
        <div className='login_page'>
            <p>Sign In With Google to Contuie</p>
            <MyButton onClick={signInWithGoogle}>Sign In With Google</MyButton>
        </div>
    );
};

export default Login;