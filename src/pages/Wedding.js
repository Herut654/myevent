import React, { useEffect } from 'react'
import EventCard from '../components/EventCard'
import { Grid, Container, Typography } from '@mui/material'
import useStyles from "./style";
import PopUp from '../components/PopUp';
import { getSuppliers } from '../features/supplier/supplierSlice'
import { useSelector, useDispatch  } from 'react-redux'


const Wedding = ({open, handleClose}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { suppliers, isError, message } = useSelector(
      (state) => state.suppliers
    )
  
    useEffect(() => {
  
      if (isError) {
        console.log(message)
      }
      dispatch(getSuppliers())
  
    }, [isError, message, dispatch])
 
    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item >
                <Typography variant="h5">לפי המידע שקיבלנו, אתם חוגגים אירוע מסוג "חתונה". להלן רשימה של ספקים לפי קטגוריות לאירוע שלך:</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
                <EventCard data={suppliers} />
            </Grid>
            <PopUp open={open} handleClose={handleClose} eventName="חתונה"/>
        </Container>
    )
}

export default Wedding
