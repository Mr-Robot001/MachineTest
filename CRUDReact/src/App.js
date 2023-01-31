import logo from "./logo.svg";
import "./App.css";
import data from "./Data";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EditTable from './components/EditTable'
import Create from './components/Create'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/editTable/:id" element={<EditTable/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
