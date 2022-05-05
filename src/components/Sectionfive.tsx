import React from 'react'
import logo from "./assets/logo.svg";
import section51 from "./assets/section51.svg";
import section52 from "./assets/section52.svg";
import section53 from "./assets/section53.svg";
import section54 from "./assets/section54.svg";
import circle from "./assets/circle.svg";
import play from "./assets/play.svg";

function Sectionfive () {
    return (
        <div className="section5">
       <div className="section5-top">
         <img src={logo} alt="logo" />
         <span>VIDEOS</span>
         </div>
         <div className="section5-content">
           <h2 className="text5">What people are watching now</h2>
           <button className="section5-btn">View more videos</button>
           </div>
         <div className="section5-main">
            <div className="section5-img">
            <img src={section51} alt="section51" />
        <div className="play-section5">
            <img src={circle} alt="circle" />
            </div>
            <div className="play-section6">
            <img src={play} alt="play" />
                </div>
            <h4 className="text">7 Baby's Checklist</h4>
            <p className="time">12 mins</p>
            </div>
            <div className="section5-img">
            <img src={section52} alt="section52" />
        <div className="play-section5">
            <img src={circle} alt="circle" />
            </div>
            <div className="play-section6">
            <img src={play} alt="play" />
                </div>
                <h4 className="text">Awesome baby name ideas</h4>
            <p className="time">12 mins</p>
            </div>
            <div className="section5-img">
            <img src={section53} alt="section53" />
        <div className="play-section5">
            <img src={circle} alt="circle" />
            </div>
            <div className="play-section6">
            <img src={play} alt="play" />
                </div>
                <h4 className="text">10 signs you're pregnant</h4>
                <p className="time">12 mins</p>
            </div>
            <div className="section5-img">
            <img src={section54} alt="section54" />
        <div className="play-section5">
            <img src={circle} alt="circle" />
            </div>
            <div className="play-section6">
            <img src={play} alt="play" />
                </div>
                <h4 className="text">Pregnancy and back pain</h4>
                <p className="time">12 mins</p>
            </div>
         </div>
    </div>
    )
}

export default Sectionfive