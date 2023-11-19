import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./components/Pages/Notes";
import { Home } from "./components/Pages/Home";
import { Contribute } from "./components/Pages/Contribute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/notes/:name" element={<Notes />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
