import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function PostForm() {
    return(
        <>
            <form>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="empty textarea"
                    // style={{ width: 200 }}
                    placeholder="Write your comment"
                    // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    //     ut labore et dolore magna aliqua."
                   className='post-form'
                />
            </form>
        </>
    )
}

export default PostForm