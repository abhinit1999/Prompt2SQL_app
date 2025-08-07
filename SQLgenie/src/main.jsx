import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppPage from './pages/AppPage';
import Landing from './pages/Landing';
import DemoPage from './pages/DemoPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/app" element={<AppPage />} /> */}
      <Route path="/app" element={<DemoPage />} />
    </Routes>
  </BrowserRouter>
);
