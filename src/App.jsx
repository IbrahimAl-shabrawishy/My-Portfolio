import { useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
