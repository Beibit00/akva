import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  useNavigate,
} from "react-router-dom";


export const AppBarComponent=()=> {
  const navigate = useNavigate();
  const handleLogOut=()=>{
    
    localStorage.removeItem('token');
    
    navigate('/')
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button onClick={handleLogOut} component={Link} to="/" color="inherit">Logout</Button>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link} to="/userpage"
                color="inherit"
              >
                <AccountCircle />
            </IconButton>
          
         
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}