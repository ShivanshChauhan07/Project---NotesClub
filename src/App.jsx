import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./components/Notes";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/notes/:name" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
