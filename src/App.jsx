import React from 'react';
//Views
import Home from "./views/Home";
import Product from "./views/Product";
import Cart from "./views/Cart";
import ListProduct from "./views/ListProduct"
import BuyProduct from "./views/BuyProduct"
//Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HOME, PRODUCT_DETAIL, CART, BUYING, SEARCH } from './routes/paths';
import WithNav from './routes/WithNav';
import WithOutNav from './routes/WithOutNav';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route exact path={HOME} element={<Home />} />
            <Route path={PRODUCT_DETAIL} element={<Product />} />
            <Route path={CART} element={<Cart />} />
            <Route path={SEARCH} element={<ListProduct />} />
          </Route>
          <Route element={<WithOutNav />}>
            <Route path={BUYING} element={<BuyProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
