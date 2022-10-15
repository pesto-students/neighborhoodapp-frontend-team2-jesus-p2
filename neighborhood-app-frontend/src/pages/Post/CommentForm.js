import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CommentForm() {
    const [msg, setMsg] = useState(null);
    const history = useNavigate();
    const handlePostSubmit = async (e) => {
        console.log("I am called ror comments creation")
        e.preventDefault();
        //console.log(msg);
        try{
            await axios.post('http://localhost:8080/comments', {
                postId: 1,
                categoryId: 1,
                message: msg
            });
            history('/posts');
        }catch (error) {
            console.log(error)
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
    const handleChange = (e) => {
        setMsg(e.target.value)
        console.log(msg);
    }
    return(
        <>
            <form className='textarea-container' onSubmit={handlePostSubmit}>
                <TextareaAutosize
                    maxRows={2}
                    aria-label="empty textarea"
                    placeholder="Write your comment"
                   className='post-form'
                   onChange={handleChange}
                />
                <Button type="submit">Post</Button>
            </form>
        </>
    )
}

export default CommentForm