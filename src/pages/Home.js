import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Box, Card, CardMedia } from '@mui/material';

const Home = () => {
  const theme = useTheme();

  return (
    <>

      <Typography variant="h3" sx={{ margin: 5 }}>
        המלצות והתרשמות מהאתר שלנו :
      </Typography>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={9}>
          <Card sx={{ display: 'flex', direction: 'rtl' }}>
            <CardMedia
              component="img"
              sx={{ width: 80 }}
              image={require('../assets/images/profile.jpg')}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" sx={{ margin: 3 }}>
              התרשמתי מאוד מהאתר לטובה. קיבלתי סיוע מדהים בארגון האירוע ללא מאמץ יתר.אין ספק שעוד אחזור לארגן פה את האירועים הבאים.
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
              <Typography variant="subtitle2" sx={{ margin: 3 }}>
                האתר עוזר המון בארגון אירוע במינימום מאמץ. לי אישית האתר מאוד סייע.
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
              <Typography variant="subtitle2" sx={{ margin: 3 }}>
                מאוד מרוצה מהשירות שנותן האתר. ניתן לפנות למגוון ספקים מאוד מקצועיים ומומלצים.
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
              <Typography variant="subtitle2" sx={{ margin: 3 }}>
                אתר מצוין. עזר לי המון בארגון האירוע.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default Home
