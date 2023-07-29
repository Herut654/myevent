import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Box, Card, CardMedia } from '@mui/material';

const Home = () => {
  const theme = useTheme();

  return (
    <>

      <Typography variant="h1" sx={{ margin: 0 }}>
        ברוכים הבאים ליצירת האירוע הבא שלכם...
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={9}>
          <Card sx={{ display: 'flex', direction: 'rtl' }}>
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={require('../assets/images/profile.jpg')}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" sx={{ margin: 0 }}>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card sx={{ display: 'flex', direction: 'rtl' }}>
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={require('../assets/images/profile.jpg')}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" sx={{ margin: 0 }}>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card sx={{ display: 'flex', direction: 'rtl' }}>
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={require('../assets/images/profile.jpg')}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" sx={{ margin: 0 }}>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card sx={{ display: 'flex', direction: 'rtl' }}>
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={require('../assets/images/profile.jpg')}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" sx={{ margin: 0 }}>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default Home
