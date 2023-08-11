import React from 'react'
import {  Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const EventCard = ({ data }) => {
  console.log("data",data)

  return (
    <>
      {data.map((eventData, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
                sx={{ height: 140 }}
                image={eventData.image}
                title={eventData.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {eventData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {eventData.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={eventData.link}>פרטים נוספים</Button>
              </CardActions> 
            </Card>
          </Grid>
        )
      })}

    </>

  )
}

export default EventCard
