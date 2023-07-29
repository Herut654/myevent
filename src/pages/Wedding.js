import React from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container, Typography } from '@mui/material'
import useStyles from "./style";
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg'
import attractionAndDJ from '../assets/images/attractionAndDJ.jpg'
import weddingClouth from '../assets/images/weddingClouth.jpg'
import photographer from '../assets/images/photographer.jpg'
import beautySalon from '../assets/images/beautySalon.jpg'


const Wedding = () => {
    const classes = useStyles();
    const data = [
        { id: "1", name: "event hall", image: eventHall, description: "Call us to find the best wedding hall for your event" },
        { id: "2", name: "catering", image: catering, description: "Call us to find the best catering for your event"  },
        { id: "3", name: "attraction and DJ", image: attractionAndDJ, description: "Call us to find the best attraction and DJ for your event"  },
        { id: "4", name: "wedding clouth", image: weddingClouth, description: "Call us to find the best wedding clouth for your event"  },
        { id: "5", name: "photographer", image: photographer, description: "Call us to find the best photographer for your event"  },
        { id: "6", name: "beauty salon", image: beautySalon, description: "Call us to find the best beauty salon for your event"  },
    ]
    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">According to the information we received, you are celebrating a "wedding" type of event. Below is a list of suppliers by category for your event:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>
    )
}

export default Wedding
