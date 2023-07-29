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
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Event Type: {eventData.eventName}</Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary"> Date: {eventData.date}</Typography>
                                <Typography variant="body1">For this name: {eventData.name}</Typography>
                                <Typography variant="body1">Number of gusets: {eventData.gusets}</Typography>
                                <Typography variant="body1">Total approval: {eventData.approval}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">To Cancle</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}

export default BasicCard
