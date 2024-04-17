import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "../pages/Main";

import ProtectRoute from "./ProtectRoute.jsx";
import Context from "../contexts/Context.js";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
