import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./components/Pages/Notes";
import { Home } from "./components/Pages/Home";

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
