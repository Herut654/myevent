import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Logo from '../assets/images/logo.jpg'
import { useState } from 'react';

function Header() {
  const [isLogedIn, setIsLogedIn] = useState(true)

  const register = window.location.toString().includes("register")
  const login = window.location.toString().includes("login")
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src={Logo} width={80} height={50}/>
              
              <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>
                <Button color="inherit" href='/welcome'>Welcome</Button>
              </Box>
              <>
             
              {isLogedIn == true ?  <><Button color="inherit" href='/Profile'>Profile</Button> 
              <Button color="inherit" href='/login'><FaSignInAlt />Logout</Button> </>: 
              <>
               {/* <Button color="inherit" href='/login'><FaSignInAlt />Login</Button>
               <Button color="inherit" href='/register'><FaUser />Register</Button> */}
               {register ?(<Button color="inherit" href='/login'><FaSignInAlt />Login</Button>) : (<></>) }
              {login ?(<Button color="inherit" href='/register'><FaUser />Register</Button>) : (<></>) }
               </>}
              
            </>
        </Toolbar>
       
      </AppBar>
    </Box>
  )
}

export default Header
