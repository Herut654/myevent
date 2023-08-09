import React from 'react';
import useStyles from "./style";
import { Container, Typography, Grid } from '@mui/material'
import Slider from '../components/Slider';


const Profile = () => {
    const classes = useStyles();
    
    const data = [
      {id: "1", date: "25/06/2024", name: "עמית", gusets: "200", approval: "25", eventName: "חתונה" },
      {id: "2", date: "05/08/2023", name: "לאה", gusets: "100", approval: "50", eventName: "יום הולדת" },
      {id: "3", date: "08/12/2023", name: "מייק", gusets: "80", approval: "22", eventName: "ברית" },
      
  ]
  return (
    <Container className={classes.container}>
        <Typography variant="h6">שלום משתמש יקר </Typography>
        <Typography variant="subtitle1">קיבלנו את בקשתך ליצירת אירוע</Typography>
        <Slider data={data} />
</Container>
  )
}

export default Profile
