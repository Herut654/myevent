import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

const EventCard = ({ data }) => {
  return (
    <>
      {data.map((eventData, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
                sx={{ height: 140 }}
                image={eventData.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {eventData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {eventData.description}
                </Typography>
              </CardContent>
              {eventData.link ? <CardActions>
                <Button size="small" href={eventData.link}>פרטים נוספים</Button>
              </CardActions> : <></>}
            </Card>
          </Grid>
        )
      })}

    </>

  )
}

export default EventCard
