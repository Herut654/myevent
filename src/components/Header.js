import React, { useState } from 'react';
import { CgLogOut } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { logout, reset } from '../features/auth/authSlice'
import Logo from '../assets/images/logo.png'

function Header({handleOpen}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [isLogedIn, setIsLogedIN] = useState(false)
  const register = window.location.toString().includes("register")
  const login = window.location.toString().includes("login")
  const home = window.location.toString().includes("Home") || window.location.toString().includes("/")
  const createEvent = window.location.toString().includes("circumcision") || window.location.toString().includes("birthday") || window.location.toString().includes("wedding") || window.location.toString().includes("barMitzva")

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1, direction: 'rtl' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
          <img src={Logo} width={80} height={50} />
          {createEvent ? <Button color='inherit' size="small" onClick={handleOpen} >צור אירוע</Button> : <></>}
          
          </div>
          {!isLogedIn ? <div>
            {register ? (<Button color="inherit" href='/login'>התחברות</Button>) : (<></>)}
              {login ? (<Button color="inherit" href='/register'>הרשמה</Button>) : (<></>)}
              {home ? (<><Button color="inherit" href='/register'>הרשמה</Button>
              <Button color="inherit" href='/login'>התחברות</Button></>) : (<></>)}
          </div> : <Button color="inherit" onClick={onLogout}>להתנתקות<CgLogOut /></Button>}
          
          {/* {!user ? (
            <>
              <Button color="inherit" onClick={onLogout}>להתנתקות<CgLogOut /></Button>
            </>
          ) : (
            <>
              {register ? (<Button color="inherit" href='/login'>התחברות</Button>) : (<></>)}
              {login ? (<Button color="inherit" href='/register'>הרשמה</Button>) : (<></>)}
              {home ?(
                <div>
                <Button color="inherit" href='/login'>התחברות</Button>
                <Button color="inherit" href='/register'>הרשמה</Button>
                </div>
              ):(<></>)
              
            }

            </>
          )} */}
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header