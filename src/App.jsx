import React from 'react';
import VerifyingClient from './components/VerifyingClient.jsx';
import { Route, Routes } from 'react-router-dom';
const LazySignin = React.lazy(() => import('./components/Signin'));
const LazyImaging = React.lazy(() => import('./components/Imaging'));
const LazyTest = React.lazy(() => import('./components/CursorTrail'));
import './styles/app.css';


function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path='/' element={
            <LazySignin />
        }/>

        <Route path='/imaging' element={
          <React.Suspense fallback={<VerifyingClient />}>
            <LazyImaging />
          </React.Suspense>
        } />

        <Route path='/test' element={
          <React.Suspense fallback={<VerifyingClient />}>
            <LazyTest />
          </React.Suspense>
        } />

      </Routes>
    </div>
  )
}

export default App
