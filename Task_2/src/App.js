import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const App = () => {

  return (<div className='overflow-hidden'>
    <Router>
      <Header />
      <Sidebar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  </div>);
};

export default App;
