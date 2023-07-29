import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Container, Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from "./style";

function Login() {
  const classes = useStyles();
  const paperStyle = { padding: 20, }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    console.log("userData", userData)
  }

  return (
    <Container className={classes.container}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={9} md={6} lg={4} >
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center' >
              <Avatar style={avatarStyle} sx={{ mb: 2.25 }}><LockIcon /></Avatar>
              <Typography variant='h2' sx={{ mb: 2.25 }}>Login</Typography>
            </Grid>
            <form onSubmit={onSubmit}>
              <Grid sx={{ mb: 2.25 }}>
                <TextField
                  fullWidth required sx={{ mb: 2.25 }}
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
                <TextField
                  fullWidth required sx={{ mb: 2.25 }}
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </Grid>
              <Button type='submit' color='primary' variant="contained" style={btnstyle} >Submit</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
