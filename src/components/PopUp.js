import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { Modal, Button, Paper, TextField, Typography, Stack } from '@mui/material'
import useClasses from '../hooks/useClasses';
import style from "./style";
import { ulamType, foodType, salonType, attractionType, clouthType, photographerType, placeDesignType, mohelType, activeBarType} from "./Data";

const PopUp = ({open, handleClose, eventName}) => {
    const classes = useClasses(style);
    const wedding = window.location.toString().includes("wedding")
    const barMitzva = window.location.toString().includes("barMitzva")
    const birthday = window.location.toString().includes("birthday")
    const circumcision = window.location.toString().includes("circumcision")
  return (
    <Modal open={open} onClose={handleClose} >
    <Paper className={classes.modal} >
      <form autoComplete="off" className={classes.form} >
        <Typography variant="h6">
         צור אירוע ל{eventName}
        </Typography>
        <Autocomplete
          fullWidth
          value="אולם"
          options={ulamType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="קייטרינג"
          options={foodType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        {wedding ? <>
          <Autocomplete
          fullWidth
          value="אטרקציות ודיג'יי"
          options={attractionType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="לבוש לאירוע"
          options={clouthType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="צלם"
          options={photographerType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
          <Autocomplete
          fullWidth
          value="סלון יופי"
          options={salonType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        </>  : <></>}
        {barMitzva ? <>
          <Autocomplete
          fullWidth
          value="אטרקציות ודיג'יי"
          options={attractionType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="לבוש לאירוע"
          options={clouthType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="צלם"
          options={photographerType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        </>  : <></>}
        {birthday ? <>
          <Autocomplete
          fullWidth
          value="אטרקציות ודיג'יי"
          options={attractionType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="עיצוב מקום"
          options={placeDesignType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="בר אקטיבי"
          options={activeBarType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        </>  : <></>}
        {circumcision ? <>
          <Autocomplete
          fullWidth
          value="מוהל"
          options={mohelType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="עיצוב מקום"
          options={placeDesignType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        <Autocomplete
          fullWidth
          value="צלם"
          options={photographerType.map((option) => option.name)}
          renderInput={(params) => <TextField {...params}  margin="normal" />}
        />
        </>  : <></>}
        
       
        <Stack direction="row" spacing={4}>
          <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="primary"  fullWidth>Clear</Button>
        </Stack>
      </form>
    </Paper>
  </Modal>
  )
}

export default PopUp
