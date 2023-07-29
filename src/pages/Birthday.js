import React from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container,Typography } from '@mui/material'
import useStyles from './style';
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg' 
import attractionAndDJ from '../assets/images/attractionAndDJ.jpg'
import placeDesign from '../assets/images/placeDesign.jpg'
import activeBar from '../assets/images/activeBar.jpg'

const Birthday = () => {
    const classes = useStyles();
    const data = [
            {id: "1", name: "event hall", image: eventHall, description: "Call us to find the best wedding hall for your event" },
            {id: "2", name: "catering", image: catering, description: "Call us to find the best catering for your event" },
            {id: "3", name: "attraction and DJ", image: attractionAndDJ, description: "Call us to find the best attraction and DJ for your event" },
            {id: "4", name: "place design", image: placeDesign, description: "Call us to find the best place designer for your event" },
            {id: "5", name: "active bar", image: activeBar, description: "Call us to find the best active bar for your event" },
            
        
    ]
    return(
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">According to the information we received, you are celebrating a "Birthday" type of event. Below is a list of suppliers by category for your event:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>

    )
}

export default Birthday