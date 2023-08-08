import React from 'react';
import useStyles from "./style";
import { Container, Typography, Grid } from '@mui/material'
import BasicCard from '../components/BasicCard';


const Profile = () => {
    const classes = useStyles();
    
    const data = [
      {id: "1", date: "25/06/2024", name: "Amit", gusets: "200", approval: "25", eventName: "Wedding" },
      {id: "2", date: "05/08/2023", name: "Lea", gusets: "100", approval: "50", eventName: "Birthday" },
      {id: "3", date: "08/12/2023", name: "Mike", gusets: "80", approval: "22", eventName: "Circumcision" },
      
  ]
  return (
    <Container className={classes.container}>
        <Typography variant="h6">שלום משתמש יקר </Typography>
        <Typography variant="subtitle1">קיבלנו את בקשתך ליצירת אירוע</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <BasicCard data={data} />
            </Grid>
</Container>
  )
}

export default Profile
