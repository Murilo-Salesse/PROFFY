import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landind from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landind />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
