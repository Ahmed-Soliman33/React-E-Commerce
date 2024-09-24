import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import LoginPage from "./Pages/LoginPage";

// Create the router
const router = createHashRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/mens",
    element: <ShopCategory banner={men_banner} category="men" />,
  },
  {
    path: "/womens",
    element: <ShopCategory banner={women_banner} category="women" />,
  },
  {
    path: "/kids",
    element: <ShopCategory banner={kid_banner} category="kid" />,
  },
  {
    path: "/product/:productId",
    element: <Product />, // You can access the productId from useParams() in the Product component
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <LoginSignup />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
