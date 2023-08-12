import React from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container,Typography } from '@mui/material'
import useStyles from './style';
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg' 
import attractionAndDJ from '../assets/images/attractionAndDJ.jpg'
import placeDesign from '../assets/images/placeDesign.jpg'
import activeBar from '../assets/images/activeBar.jpg'
import PopUp from '../components/PopUp';

const Birthday = ({open, handleClose}) => {
    const classes = useStyles();
    const data = [
            {id: "1", name: "אולם אירועים", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים הטוב ביותר לאירוע שלכם" },
            {id: "2", name: "קייטרינג", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם" },
            {id: "3", name: "אטרקציות ודיג'יי ", image: attractionAndDJ, description: "התקשרו אלינו כדי למצוא את האטרקציות והדי ג'יי הטובים ביותר לאירוע שלכם" },
            {id: "4", name: "עיצוב מקום", image: placeDesign, description: "התקשרו אלינו כדי למצוא את מעצב המקום הטוב ביותר לאירוע שלכם" },
            {id: "5", name: "בר אקטיבי", image: activeBar, description: "התקשרו אלינו כדי למצוא את הבר האקטיבי הטוב ביותר לאירוע שלכם" },
            
        
    ]
    return(
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">לפי המידע שקיבלנו, אתם חוגגים אירוע מסוג "יום הולדת". להלן רשימה של ספקים לפי קטגוריות לאירוע שלך:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
            <PopUp open={open} handleClose={handleClose} eventName="יום הולדת"/>
        </Container>

    )
}

export default Birthday