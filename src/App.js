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
    <Chef />
    <SpecialMenu />
    <Gallery />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer />
    </div>
  );
}

export default App;
