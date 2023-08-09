import React from 'react'
import { Box, Button, Modal, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EventCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
      {data.map((eventData, index) => {
        return (
          <>
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
              <CardActions>
                <Button size="small" href={eventData.link}>פרטים נוספים</Button>
                <Button size="small" onClick={handleOpen}>צור אירוע</Button>
              </CardActions> 
            </Card>
          </Grid>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
          </>
        )
      })}

    </>

  )
}

export default EventCard
