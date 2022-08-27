import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaginationRounded } from '../pagination';

export const Main = () => {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        const fetchusers= async()=>{
            const {data}=await axios.get("https://reqres.in/api/users/")
            setUsers(data.data)
            console.log(data.data);
        };
        fetchusers();
    },[])

    const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="md">
                
                <Grid container spacing={4}>
                    {users.map((profile) => (
                        <Grid item key={profile} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia style={{paddingTop:'initial'}}
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={profile.avatar}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {profile.first_name}
                                    </Typography>
                                    <Typography>
                                        {profile.email}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    <Button  size="small">View</Button>
                                    
                                    
                                    
                                </CardActions>
                                
                            </Card>
                            
                        </Grid>
                    ))}
                    
                </Grid><PaginationRounded/>
            </Container>
            
        </ThemeProvider>
  )
}


