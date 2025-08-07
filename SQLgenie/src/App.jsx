import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AppPage from './pages/AppPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/app" element={<AppPage />} /> */}
       <Route path="/app" element={<DemoPage />} />
    </Routes>
  );
}

export default App;