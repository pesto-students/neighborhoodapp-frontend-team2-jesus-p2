import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Auth() {
    const [IsSignUp, setIsSignUp] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
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