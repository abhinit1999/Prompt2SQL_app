import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppPage from './pages/AppPage';
import Landing from './pages/Landing';
import DemoPage from './pages/DemoPage';
import About from "./pages/About";
import Support from "./pages/Support";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar></Navbar>
    <main className='pt-16'>

      <Routes>
      <Route path="/" element={<Landing />} />

      {/* <Route path="/app" element={<AppPage />} /> */}
      <Route path="/app" element={<DemoPage />} />
         <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>

    <Footer></Footer>
  </BrowserRouter>
);
