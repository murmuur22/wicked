import React from 'react';
import Signin from './components/Signin';
import Imaging from './components/Imaging';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/imaging' element={<Imaging />} />
      </Routes>
    </div>
  )
}

export default App
