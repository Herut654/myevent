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
        {id: "1", name: "אולם אירועים", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים המתאים ביותר לאירוע שלכם" },
        {id: "2", name: "קייטרינג", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם" },
        {id: "3", name: "מוהל ", image: CircumcisionJuice, description: "התקשרו אלינו כדי למצוא את המוהל הטוב ביותר לאירוע שלכם" },
        {id: "4", name: "עיצוב מקום", image: placeDesignC, description: "התקשרו אלינו כדי למצוא את מעצב המקום הטוב ביותר לאירוע שלכם" },
        {id: "5", name: "צלם", image: photographer, description: "התקשרו אלינו כדי למצוא את הצלם הטוב ביותר לאירוע שלכם" },
        

    ]
    return(
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">לפי המידע שקיבלנו, אתם חוגגים אירוע מסוג "ברית מילה". להלן רשימה של ספקים לפי קטגוריות לאירוע שלך:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>

    )
}
export default Circumcision