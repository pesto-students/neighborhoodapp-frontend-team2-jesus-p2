import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Divider, Avatar, Grid, Paper, Typography, Link } from "@mui/material";
import PostForm from "../Post/CommentForm";
import './Comment.css'

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


function Comment() {
    const [ShowCommentBox, setShowCommentBox] = useState(false)
    return(
        <>
            <div>
                <Typography variant="h5" mt={2}>Comments</Typography>
                <Paper style={{ padding: "40px 20px" }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                            <Link
                                underline="none"
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    setShowCommentBox(!ShowCommentBox)
                                }}
                            >
                                Reply
                            </Link>
                            <div className="comment-box">
                                {ShowCommentBox ?  <PostForm /> : ''}
                            </div>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                </Paper>
            </div>
        </>
    )
}

export default Comment