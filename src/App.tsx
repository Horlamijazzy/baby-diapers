import React from 'react';
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Sectionone from "./components/Sectionone"
import Sectiontwo from "./components/Sectiontwo"
import Sectionthree from "./components/Sectionthree"
import Sectionfour from "./components/Sectionfour"
import Sectionfive from "./components/Sectionfive"
import Testimonial from "./components/Testimonial"
import Sectionsix from "./components/Sectionsix"
import Sectionseven from "./components/Sectionseven"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection />
     <Sectionone />
     <Sectiontwo />
     <Sectionthree />
     <Sectionfour />
     <Sectionfive />
     <Testimonial />
     <Sectionsix />
     <Sectionseven />
     <Footer />
    </div>
  );
}

export default App;
