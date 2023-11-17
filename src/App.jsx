import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Unversities from "./components/Unversities";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Body />
      <Unversities />
      <Footer />
    </>
  );
}

export default App;
