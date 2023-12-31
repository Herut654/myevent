import React from 'react'
import EventCard from '../components/EventCard'
import {Grid, Container,Typography} from '@mui/material'
import useStyles from './style';
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg'
import CircumcisionJuice from '../assets/images/CircumcisionJuice.jpg'
import placeDesignC from '../assets/images/placeDesignC.jpg'
import photographer from '../assets/images/photographer.jpg'
import PopUp from '../components/PopUp';


 

const Circumcision = ({open, handleClose}) => {
    const classes = useStyles();
    const data = [
        {id: "1", name: "אולם אירועים", link: "ulamType", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים המתאים ביותר לאירוע שלכם" },
        {id: "2", name: "קייטרינג", link: "foodType", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם" },
        {id: "3", name: "מוהל ", link: "mohelType", image: CircumcisionJuice, description: "התקשרו אלינו כדי למצוא את המוהל הטוב ביותר לאירוע שלכם" },
        {id: "4", name: "עיצוב מקום", link: "placeDesignType", image: placeDesignC, description: "התקשרו אלינו כדי למצוא את מעצב המקום הטוב ביותר לאירוע שלכם" },
        {id: "5", name: "צלם", link: "photographerType", image: photographer, description: "התקשרו אלינו כדי למצוא את הצלם הטוב ביותר לאירוע שלכם" },
        

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
            <PopUp open={open} handleClose={handleClose} eventName="ברית מילה"/>
        </Container>

    )
}
export default Circumcision