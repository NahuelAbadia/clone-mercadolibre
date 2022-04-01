import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/view/Home";
import Product from "./components/view/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HOME, PRODUCT, PRODUCT_DETAIL } from './routes/paths';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={PRODUCT} element={<Product />} />
          <Route path={PRODUCT_DETAIL} element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
