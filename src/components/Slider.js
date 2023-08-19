import React, { useState } from 'react';
import useStyles from "../pages/style";
import SwipeableViews from 'react-swipeable-views';
import { Container, Button, MobileStepper, Typography, Grid, CardActions, CardContent, Card, ListItemAvatar, ListItem, List, Avatar, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { foodType, photographerType, ulamType } from './Data';



const Slider = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;
    const home = window.location.toString().includes("Home")
    const profile = window.location.toString().includes("Profile")


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
console.log("data", data)
    return (
        <Container className={classes.container}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={9} md={6} lg={4} >
                    <div className={classes.root}>
                        <SwipeableViews
                            axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {data.map((eventData, index) => {
                                return (
                                    <>
                                    {home?
                                    <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem  alignItems="flex-end">
                                      <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                      </ListItemAvatar>
                                      <ListItemText
                                        primary={eventData.date}
                                        secondary={
                                          <React.Fragment>
                                            <Typography
                                              sx={{ display: 'inline' }}
                                              component="span"
                                              variant="body2"
                                              color="text.primary"
                                            >
                                              {eventData.name}
                                              <br></br>
                                            </Typography>
                                            {eventData.eventName}
                                          </React.Fragment>
                                        }
                                      />
                                    </ListItem>
                                  </List>
                                   :
                                    <div key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Card sx={{ backgroundColor: "#e8eaf6", textAlign: "center" }}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>סוג אירוע: {eventData.eventName}</Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary"> תאריך: {eventData.date}</Typography>
                                                    <Typography variant="body1">שם החוגג: {eventData.name}</Typography>
                                                    <Typography variant="body1">אולם אירועים: {ulamType.name}</Typography>
                                                    <Typography variant="body1">קייטרינג: {foodType.name}</Typography>
                                                    <Typography variant="body1">צלם: {photographerType.name}</Typography>
                                                </CardContent>
                                                <CardActions sx={{ justifyContent: 'center' }}>
                                                    <Button size="small">מחיקה</Button>
                                                    <Button size="small">עריכה</Button>
                                                </CardActions>
                                            </Card>
                                        ) : null}
                                    </div>
                            }
                                    </>
                                )
                            })}
                        </SwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    קדימה
                                    {theme.direction === 'ltr' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'ltr' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    לאחור
                                </Button>
                            }
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Slider;