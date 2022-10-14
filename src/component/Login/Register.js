import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from '../../config/axiosClient';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/user';

const theme = createTheme();

function Register() {
    const [userInfor, setUserInfor] = useState({
        email: "",
        name: "",
        password: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errMSG, setErrMSG] = useState("");
    const handleChange = (e) => {
        setErrMSG("");
        setUserInfor({ ...userInfor, [e.target.name]: e.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if(confirmPassword !== userInfor.password) { 
            setErrMSG("Invalid confirm password!");
        }
        else {
        axiosClient.post('/user/auth/register', userInfor ).then((res)=> {
            alert("Create user successfully!");
            dispatch(setUser(res.data.user));
            localStorage.setItem("accessTokenFD", res.data.accessToken);
            navigate("/");
            
        }).catch((err) => setErrMSG(err.response.data));
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{pb: 6}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                    </Typography>
                    <div className='bg-rose-500 text-md my-3 text-white px-3 rounded-md w-full text-center font-sans'>{errMSG}</div>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="User Name"
                            name="name"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleChange}
                        />
                         <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirm"
                            label="Confirm Password"
                            type="password"
                            id="password_confirm"
                            onChange={(e)=>{setErrMSG("");setConfirmPassword(e.target.value)}}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                              
                            </Grid>
                            <Grid item>
                            <NavLink to="/login" title="register" className="text-sm font-normal underline text-blue-400">
                                    {"Already have an account? Login"}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Register;