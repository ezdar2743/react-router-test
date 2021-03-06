import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './routes/detail';
import Home from './routes/home';
const App = () => {
  return (
   <BrowserRouter> 
    <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/:id"  element={<Detail/>}></Route>

    </Routes>
    </BrowserRouter>
  );
};

export default App;