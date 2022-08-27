import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"





const URL = "https://reqres.in/api/login/"
const google = window.google;



const theme = createTheme();

export const SignIn=()=> {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const result = await axios.post(`${URL}`,{
      email: data.get('email'),
      password: data.get('password'),
      
    }).then((response)=>{
      if(response.status===200){
        navigate('/main')
        localStorage.setItem("token",response.data.token)
      }
    })
    
    
    
    
    
  };

  function handleCallbackResponse(response){
      // console.log("Encoded JWT ID token: " + response.credential);
      var userObject=jwt_decode(response.credential)
      console.log(userObject);
      if(userObject===''){
        alert('something wrong')
      }else{
        localStorage.setItem("token",userObject.jti)
        navigate('main')
      }
      
  }
  useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
      client_id:'827337898164-46uon7hat6ed3s3vqsl8hhco06kddhp9.apps.googleusercontent.com',
      callback : handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}

    )
  },[])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div id='signInDiv'></div>
      </Container>
    </ThemeProvider>
  );
}