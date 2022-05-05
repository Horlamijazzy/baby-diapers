import React from 'react'
import video from "./assets/video.svg";
import circle from "./assets/circle.svg";
import play from "./assets/play.svg";

function Sectiontwo () {
    return (
        <div className="sectiontwo">
        <div className="sectiontwo_content">
            <h1>Want to know how your<br /> baby looks like now?</h1>
            <div className="sectiontwo_button">
            <button className="hero-btn1">Show me</button>
            <button className="hero-btn3">Create account</button>
            </div>
            
        </div>
        <div className="sectiontwo_video">
            <img src={video} alt="video" />
        <div className="play-section1">
            <img src={circle} alt="circle" />
            </div>
            <div className="play-section2">
            <img src={play} alt="play" />
                </div>
        </div>
        
        </div>
    )
}

export default Sectiontwo