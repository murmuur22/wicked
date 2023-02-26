import React from 'react';
import VerifyingClient from './components/VerifyingClient.jsx';
import { Route, Routes } from 'react-router-dom';
const LazySignin = React.lazy(() => import('./components/Signin'));
const LazyImaging = React.lazy(() => import('./components/Imaging'));

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

      </Routes>
    </div>
  )
}

export default App
