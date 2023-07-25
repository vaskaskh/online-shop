import React from 'react';
import './App.css';
// import 'react-toastify/dist/react-toastify';


import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">

      
      <NavBar/>
      
      <Routes>

          <Route   exact   path='/'            element={<Home/>}/>
          <Route   exact   path='/cart'        element={<Cart/>}/>
          <Route path='/*' element={<NotFound/>}/>
          {/* <Route           path='/not-found'   element={<NotFound/>}/>
          <Navigate    to='/not-found'  /> */}


      </Routes>

      
<ToastContainer/>


    
    </div>
  );
}

export default App;
