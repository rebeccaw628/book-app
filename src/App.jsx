import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./container/Home/Home";
import { useState } from "react";
import classes from "./App.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/results" element={<Results />} />
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
