import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Auth() {
    const [IsSignUp, setIsSignUp] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [msg, setMsg] = useState('');
    const history = useNavigate();
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(IsSignUp){
            try{
                await axios.post('http://localhost:8080/users', {
                    email: inputs.email,
                    password: inputs.password,
                    confirmPassword: inputs.confirmPassword
                });
                history('/')
                setIsSignUp(false)
            }catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        }else {
            console.log("Login Auth", IsSignUp)
            try {
                await axios.post('http://localhost:8080/login', {
                    email: inputs.email,
                    password: inputs.password
                })
                history('/posts');
            }catch (error) {
                console.log("Error", error.response.data.msg)
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        // console.log(inputs)
    }
    const resetState = () => {
        setInputs({
            email: '',
            password: ''
        })
        setIsSignUp(!IsSignUp)
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="flex" 
                        flexDirection={"column"} 
                        maxWidth={400}
                        alignItems={"center"}
                        justifyContent={"center"}
                        margin="auto"
                        marginTop={3}
                        padding={3}
                        borderRadius={5}
                        boxShadow={"5px 5px 10px #ccc"}
                        sx={{
                            ":hover":{
                                boxShadow: "10px 10px 20px #ccc"
                            }
                        }}
                    >
                        <Typography 
                            variant="h3" 
                            textAlign={"center"} 
                            padding={5} 
                            color="#202121"   //"#ffba00"
                        >
                            {IsSignUp ? "Sign Up" : "Login"} 
                        </Typography>
                        <TextField
                            value={inputs.email}
                            margin="normal" 
                            type={"email"} 
                            variant="outlined" 
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <TextField 
                            value={inputs.password}
                            margin="normal" 
                            type={"password"} 
                            variant="outlined" 
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        { IsSignUp && <TextField 
                            value={inputs.confirmPassword}
                            margin="normal" 
                            type={"password"} 
                            variant="outlined" 
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleChange}
                        />}
                        <Button
                            endIcon={IsSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
                            type="submit"
                            variant="contained" 
                            sx={{
                                backgroundColor: "#1976d2",
                                marginTop: 2,
                                ":hover":{
                                    opacity: 0.8,
                                    backgroundColor: "#1976d2",
                                }
                            }}
                        >
                            {IsSignUp ? "Sign Up" : "Login"} 
                        </Button>
                        <Button
                            endIcon={IsSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}
                            onClick={resetState}
                            sx={{
                                marginTop: 2
                            }}
                        >
                           {IsSignUp ? "Login" : "Sign up"}
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    )
}

export default Auth