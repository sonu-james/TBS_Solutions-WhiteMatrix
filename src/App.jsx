import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        {/* <Route path='/about-us' element={<About />}></Route> */}
      </Routes>
    </>

  );
}