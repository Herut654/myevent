import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import BarMitzva from './pages/BarMitzva';
import Wedding from './pages/Wedding'
import Welcome from './pages/Welcome'
import Birthday from './pages/Birthday'
import Circumcision from './pages/Circumcision'
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile'
import Suggestion from './pages/Suggestion';
import { foodType, ulamType, activeBarType, mohelType, placeDesignType, photographerType, clouthType, attractionType, salonType } from './components/Data'

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
       <Router>
          <div className='container'>
            <Header handleOpen={handleOpen}/>
            <Routes>
              <Route path='/welcome' element={<Welcome/>} />
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='/barMitzva' element={<BarMitzva open={open} handleClose={handleClose}/>} />
              <Route path='/wedding' element={<Wedding open={open} handleClose={handleClose}/>} />
              <Route path='/birthday' element={<Birthday open={open} handleClose={handleClose}/>} />
              <Route path='/circumcision' element={<Circumcision open={open} handleClose={handleClose}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/suggestion' element={<Suggestion />} />
              <Route path='/ulamType' element={<Suggestion data={ulamType}/>} />
              <Route path='/foodType' element={<Suggestion data={foodType}/>} />
              <Route path='/salonType' element={<Suggestion data={salonType}/>} />
              <Route path='/attractionType' element={<Suggestion data={attractionType}/>} />
              <Route path='/clouthType' element={<Suggestion data={clouthType}/>} />
              <Route path='/photographerType' element={<Suggestion data={photographerType}/>} />
              <Route path='/placeDesignType' element={<Suggestion data={placeDesignType}/>} />
              <Route path='/mohelType' element={<Suggestion data={mohelType}/>} />
              <Route path='/activeBarType' element={<Suggestion data={activeBarType}/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Router>
    </div>
  )
}

export default App
