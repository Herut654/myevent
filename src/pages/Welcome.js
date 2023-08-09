import React from 'react';
import useStyles from "./style";
import EventCard from '../components/EventCard'
import { Grid, Container, Typography } from '@mui/material'
import Wedding from '../assets/images/Wedding.jpg'
import BarMitzva from '../assets/images/BarMitzva.jpg'
import Birthday from '../assets/images/Birthday.jpg'
import Circumcision from '../assets/images/Circumcision.jpg'


const Welcome = () => {
  const classes = useStyles();
  const data = [
    { id: "1", name: "חתונה", image: Wedding, description: "hello", link: "wedding" },
    { id: "2", name: "בר מצווה", image: BarMitzva, description: "hello", link: "barMitzva" },
    { id: "3", name: "יום הולדת", image: Birthday, description: "hello", link: "birthday" },
    { id: "4", name: "ברית", image: Circumcision, description: "hello", link: "circumcision" },
  ]
 

  return (
    <Container className={classes.container}>
      <Grid container className={classes.welcomeContainer}>
        <Grid item  >
          <Typography variant="body2" gutterBottom>
            בראש ובראשונה צוות eventRacking מאחלים לכם המון מזל טוב ומקווים שהאתר יקל עליכן בארגון האירוע שלכם. האתר יוכל לספק לכם רשימה של ספקים מומלצים ,בין אם זה מקום לאיורע ,קייטרינג, אטרקציות, צלמים, תלבושות וכו..
            </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
        <EventCard data={data} />
      </Grid>
    </Container>
  )
}

export default Welcome
