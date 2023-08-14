import React from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container,Typography } from '@mui/material'
import useStyles from "./style";
import eventHall from '../assets/images/eventHall.jpg'
import catering from '../assets/images/catering.jpg'
import attractionAndDJ from '../assets/images/attractionAndDJ.jpg'
import eventClouth from '../assets/images/eventClouth.jpg'
import photographer from '../assets/images/photographer.jpg'
import PopUp from '../components/PopUp';


const BarMitzva = ({open, handleClose}) => {
    const classes = useStyles();
    const data = [
        {id: "1", name: "אולם אירועים", link: "ulamType", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים המתאים ביותר לאירוע שלכם" },
        {id: "2", name: "קייטרינג", link: "foodType", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם" },
        {id: "3", name: "אטרקציות ודיג'יי", link: "attractionType", image: attractionAndDJ, description: "התקשרו אלינו כדי למצוא את האטרקציות ודי ג'יי הטובים ביותר לאירוע שלכם" },
        {id: "4", name: "לבוש לאירוע", link: "clouthType", image: eventClouth, description: "התקשרו אלינו כדי למצוא את האאוטפיט הטוב ביותר לאירוע שלכם" },
        {id: "5", name: "צלם", link: "photographerType", image: photographer, description: "התקשרו אלינו כדי למצוא את הצלם הטוב ביותר לאירוע שלכם" },
        
    ]
    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">לפי המידע שקיבלנו, אתם חוגגים אירוע מסוג "בר מצווה". להלן רשימה של ספקים לפי קטגוריות לאירוע שלך:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
            <PopUp open={open} handleClose={handleClose} eventName="בר מצווה"/>
        </Container>
    )
}

export default BarMitzva
