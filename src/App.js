import React, { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import { ColorRing, Vortex } from 'react-loader-spinner'

// Lazy loading for pages
const Shop = React.lazy(() => import('./Pages/Shop'));
const ShopCategory = React.lazy(() => import('./Pages/ShopCategory'));
const Product = React.lazy(() => import('./Pages/Product'));
const Cart = React.lazy(() => import('./Pages/Cart'));
const LoginSignup = React.lazy(() => import('./Pages/LoginSignup'));
const LoginPage = React.lazy(() => import('./Pages/LoginPage'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<div>
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default React.memo(App);
