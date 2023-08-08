import React from 'react';
import { Card, CardActions, Button, Typography, CardContent, Grid, } from '@mui/material';

const BasicCard = ({ data }) => {
    console.log(data)

    return (
        <>
            {data.map((eventData, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>סוג אירוע: {eventData.eventName}</Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary"> תאריך: {eventData.date}</Typography>
                                <Typography variant="body1">שם החוגג: {eventData.name}</Typography>
                                <Typography variant="body1">מספר מוזמנים: {eventData.gusets}</Typography>
                                <Typography variant="body1">כמות אישורים: {eventData.approval}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">מחיקה</Button>
                                <Button size="small">עריכה</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}

export default BasicCard
