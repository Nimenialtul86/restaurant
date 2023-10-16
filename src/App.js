import React from "react"
import './App.css';
import { Navbar, Header, SpecialMenu, AboutUs, Laurels, Gallery, FindUs, Footer, Intro, Chef } from './components/';

function App() {
  return (
    <div>
    <div className="heading">
    <Navbar />
    <Header />
    </div>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  );
}

export default App;
