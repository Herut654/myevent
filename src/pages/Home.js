import React, { useEffect  } from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Box, Card, CardMedia } from '@mui/material';
import Slider from '../components/Slider';
import { getRecommends } from '../features/recommend/recommendSlice'
import { useSelector, useDispatch  } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const theme = useTheme();
  const { recommends, isError, message } = useSelector(
    (state) => state.recommends
  )

  useEffect(() => {

    if (isError) {
      console.log(message)
    }
    dispatch(getRecommends())

  }, [isError, message, dispatch])


  return (
    <>

      <Typography variant="h3" sx={{ margin: 5 }}>
        המלצות והתרשמות מהאתר שלנו :
      </Typography>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        
        <Slider data={recommends}/>
      
      </Grid>

    </>
  )
}

export default Home
