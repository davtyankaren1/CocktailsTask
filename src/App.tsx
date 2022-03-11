import React from 'react';
import StyledRegister from "./Components/Forms/StyledRegister";
import StyledLogin from "./Components/Forms/StyledLogin";
import Home from '../src/Components/Home';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<StyledRegister/>}/>
              <Route path='/login' element={<StyledLogin/>}/>
              <Route path='/home' element={<Home/>}/>
          </Routes>


      </>
  );
}

export default App;
