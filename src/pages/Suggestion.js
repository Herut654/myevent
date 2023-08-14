import React from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container, Typography } from '@mui/material'
import useStyles from "./style";


const Suggestion = ({ data }) => {
  const classes = useStyles();
  return (
  
       <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">רשימת המלצות</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>
  )
}

export default Suggestion
