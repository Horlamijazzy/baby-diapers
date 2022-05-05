import React from 'react'
import circle from "./assets/circle.svg";
import testimonialImage from "./assets/testimonialImage.svg";
import testimonials from "./assets/testimonials.svg";
import chevronLeft from "./assets/chevronLeft.svg";
import chevronRight from "./assets/chevronRight.svg";

function Testimonial () {
    return (
        <div className="testimonial">
            <div className="testimonialimg">
            <img src={testimonials} alt="testimonials" />
            </div>
        <div className="testimonialmain">
        <div className="chevron">
        <div className="chevron1">
            <div className="circle">
            <img src={circle} alt="circle" /> 
            </div>
        <div className="chevronleft">
        <img src={chevronLeft} alt="chevronLeft" />
        </div>
        </div>
        <div className="chevron1">
            <div className="circle1">
            <img src={circle} alt="circle" /> 
            </div>
        <div className="chevronleft1">
        <img src={chevronRight} alt="chevronRight" />
        </div>
        </div>
        </div>
        <div className="testimonialcontent">
        <div className="testimonialcontent-text">
        <p>Love this App! I've been using it since I found out I was pregnant. My<br /> daughter is now 8months old, and i still rely on the information provided. I<br /> would be lost without it.</p>
        <h4 className="testimonial-author">Oyinkasola Salami</h4>
        </div>
        <div className="testimonialcontent-img">
        <img src={testimonialImage} alt="testimonialImage" />
        </div>
              
        </div>
        </div>
        
        </div>
    )
}

export default Testimonial