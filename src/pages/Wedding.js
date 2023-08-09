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
        { id: "1", name: "אולם אירועים", link: "suggestion", image: eventHall, description: "התקשרו אלינו כדי למצוא את אולם האירועים המתאים ביותר לאירוע שלכם" },
        { id: "2", name: "קייטרינג", link: "suggestion", image: catering, description: "התקשרו אלינו כדי למצוא את הקייטרינג הטוב ביותר לאירוע שלכם"  },
        { id: "3", name: "אטרציות ודיג'יי", link: "suggestion", image: attractionAndDJ, description: "Call us to find the best attraction and DJ for your event"  },
        { id: "4", name: "לבוש לאירוע", link: "suggestion", image: weddingClouth, description: "התקשרו אלינו כדי למצוא את האאוטפיט הטוב ביותר לאירוע שלכם"  },
        { id: "5", name: "צלם", link: "suggestion", image: photographer, description: "התקשרו אלינו כדי למצוא את הצלם הטוב ביותר לאירוע שלכם"  },
        { id: "6", name: "סלון יופי", link: "suggestion", image: beautySalon, description: "התקשרו אלינו כדי למצוא את סלון היופי הטוב ביותר לאירוע שלכם"  },
    ]
    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">לפי המידע שקיבלנו, אתם חוגגים אירוע מסוג "חתונה". להלן רשימה של ספקים לפי קטגוריות לאירוע שלך:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={data} />
            </Grid>
        </Container>
    )
}

export default Wedding
