import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Medicamentos from "./pages/Medicamentos/Medicamentos";
import Outros from "./pages/Outros/Outros";


import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element = {<App/>}>
            <Route path="/" element={<Home/>} />
            <Route path="medicamentos" element={<Medicamentos />} />
            <Route path="outros" element={<Outros/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
