import React from 'react'
import main from "./assets/main.svg";

function HeroSection() {
    return (
        <div className="hero-container">
           <img src={main} alt="main" />
           <div className="hero-content">
           <h1 className="hero-con">Follow your baby's<br /> amazing development</h1>
           <p className="hero-con">Baby Diary is the world's number one digital parenting resource, with<br /> content that reaches more than 100 million people monthly.</p>
           <button className="hero-btn1">Get started</button>
           <button className="hero-btn2">Sign in</button>
           </div>
           
        </div>
    )
}

export default HeroSection