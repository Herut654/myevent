import React from 'react';
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

const App = () => {
  return (
    <div>
       <Router>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/welcome' element={<Welcome />} />
              <Route path='/home' element={<Home />} />
              <Route path='/barMitzva' element={<BarMitzva />} />
              <Route path='/wedding' element={<Wedding />} />
              <Route path='/birthday' element={<Birthday />} />
              <Route path='/circumcision' element={<Circumcision />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Router>
    </div>
  )
}

export default App
