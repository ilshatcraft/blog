import React from 'react';
import MyButton from '../UI/button/MyButton';

const CreatePost = () => {
    return (
        <div className='createPostPage'>
            <div className='input'>
                <h1> Create Post</h1>
                    <div className='input_title'>
                        <label>Title</label>
                        <textarea placeholder='title...'></textarea>
                    </div>

                    <div className='input_post'> 
                        <label>Post</label>
                        <textarea placeholder='post...'></textarea>   
                    </div>
                        <MyButton >Submit Post</MyButton>
            </div>
        </div>
    );
};

export default CreatePost;