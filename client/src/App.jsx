/* eslint-disable no-unused-vars */
import  React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import FormPage from "./components/FormPage/FormPage"
import Home from "./components/Home/Home"
import Detail from './components/Detail/Detail';
import Error from "./components/Error/Error";


function App() { 
  return (
    <div>
 <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/detail/:id' element={<Detail/>}/>
        
        <Route  path="/create" element={<FormPage/>}/>
        <Route path="*" element={<Error />} />
</Routes>
    </div>
  );
}


export default App