import { useState } from 'react';
import useStyles from "../pages/style";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container, Button, MobileStepper, Paper, Typography, Grid, CardActions, CardContent, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Container className={classes.container}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={9} md={6} lg={4} >
                    <div className={classes.root}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {data.map((eventData, index) => {
                                return (
                                    <div key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Card sx={{ backgroundColor: "#e8eaf6", textAlign: "center" }}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>סוג אירוע: {eventData.eventName}</Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary"> תאריך: {eventData.date}</Typography>
                                                    <Typography variant="body1">שם החוגג: {eventData.name}</Typography>
                                                    <Typography variant="body1">מספר מוזמנים: {eventData.gusets}</Typography>
                                                    <Typography variant="body1">כמות אישורים: {eventData.approval}</Typography>
                                                </CardContent>
                                                <CardActions sx={{ justifyContent: 'center' }}>
                                                    <Button size="small">מחיקה</Button>
                                                    <Button size="small">עריכה</Button>
                                                </CardActions>
                                            </Card>
                                        ) : null}
                                    </div>
                                )
                            })}
                        </AutoPlaySwipeableViews>
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