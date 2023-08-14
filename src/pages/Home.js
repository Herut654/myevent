import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Box, Card, CardMedia } from '@mui/material';
import Slider from '../components/Slider';

const Home = () => {
  const theme = useTheme();

  const data =[
    {id:1, name: "Moshe", eventName: " האתר עוזר המון בארגון אירוע במינימום מאמץ. לי אישית האתר מאוד סייע.", date: "24.8.1999"},
    {id:2, name: "Moshe", eventName: " האתר עוזר המון בארגון אירוע במינימום מאמץ. לי אישית האתר מאוד סייע.", date: "24.8.1999"},
    {id:3, name: "Moshe", eventName: " האתר עוזר המון בארגון אירוע במינימום מאמץ. לי אישית האתר מאוד סייע.", date: "24.8.1999"},

  ]

  return (
    <>

      <Typography variant="h3" sx={{ margin: 5 }}>
        המלצות והתרשמות מהאתר שלנו :
      </Typography>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        
        <Slider data={data}/>
      
      </Grid>

    </>
  )
}

export default Home
