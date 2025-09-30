import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        {/* <Route path='/about-us' element={<About />}></Route> */}
         <Route path='/services' element={<Services/>}></Route>
         <Route path='/products' element={<Product />}></Route>
      </Routes>
    </>

  );
}