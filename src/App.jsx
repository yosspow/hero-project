import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import OurServices from "./components/OurServises";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <OurServices />
      <Footer />
    </>
  );
}

export default App;
