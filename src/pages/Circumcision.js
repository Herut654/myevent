import React from 'react'
import EventCard from '../components/EventCard'
import {Grid, Container,Typography} from '@mui/material'
import useStyles from './style';
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg'
import CircumcisionJuice from '../assets/images/CircumcisionJuice.jpg'
import placeDesignC from '../assets/images/placeDesignC.jpg'
import photographer from '../assets/images/photographer.jpg'


 

const Circumcision = () => {
    const classes = useStyles();
    const data = [
        {id: "1", name: "event hall", image: eventHall, description: "Call us to find the best wedding hall for your event" },
        {id: "2", name: "catering", image: catering, description: "Call us to find the best catering for your event" },
        {id: "3", name: "Circumcision juice", image: CircumcisionJuice, description: "Call us to find the best Circumcision juice for your event" },
        {id: "4", name: "place design", image: placeDesignC, description: "Call us to find the best place designer for your event" },
        {id: "5", name: "photographer", image: photographer, description: "Call us to find the best photographer for your event" },
        // {id: "6", name: "hand in hand" },
        

    ]
    return(
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">According to the information we received, you are celebrating a "Circumcision" type of event. Below is a list of suppliers by category for your event:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>

    )
}
export default Circumcision