import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "../pages/Main";
import ProtectRoute from "./ProtectRoute.jsx";
import { ContextProvider } from "../contexts/Context.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Agrega aquí más rutas si es necesario */}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
