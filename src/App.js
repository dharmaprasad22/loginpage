import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Details from "./Details";
import ItemList from "./ItemList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/ItemList" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
