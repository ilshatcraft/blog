import React, { useEffect, useState } from 'react';
import MyButton from '../UI/button/MyButton';
import { collection, addDoc } from "firebase/firestore"; 

import {auth, db} from "../firebase-config"
import { useNavigate } from 'react-router-dom';


const CreatePost = ({isAuth}) => {

    const[title,setTitle]=useState()
    const[postText,setPostText]=useState()

    const postsCollectionRef =collection(db,'posts')

    let navigate=useNavigate();

    const createPost=async()=>{
        navigate('/')
        await addDoc(postsCollectionRef,{title,postText,author: {name: auth.currentUser.displayName, id:auth.currentUser.uid}})
       

    }

    useEffect(()=>{
        if(!isAuth){
        navigate('/login') 
        }
    },[]);


    return (
        <div className='createPostPage'>
            <div className='input'>
                <h1> Create Post</h1>
                    <div className='input_title'>
                        <label>Title</label>
                        <textarea 
                        placeholder='title...' 
                        onChange={(e)=>{setTitle(e.target.value)}}></textarea>
                    </div>

                    <div className='input_post'> 
                        <label>Post</label>
                        <textarea 
                        placeholder='post...'
                        onChange={(event)=>{setPostText(event.target.value)}}
                        ></textarea>   
                    </div>
                        <MyButton onClick={createPost} >Submit Post</MyButton>
            </div>
        </div>
    );
};

export default CreatePost;