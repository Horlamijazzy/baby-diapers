import React from 'react'
import appstore from "./assets/appstore.svg";
import googleplay from "./assets/googleplay.svg"
import babycenter from "./assets/babycenter.svg"
import babycenter2 from "./assets/babycenter2.svg"

function Sectionseven () {
    return(
        <div className="sectionseven">
        <div className="sectionseven-content">
            <h1 className="sectionsevenh">Get the Babycenter app</h1>
            <p className="sectionsvenp">The #1 app for tracking pregnancy and baby growth</p>
            <div className="sectionseven-con1">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
            </div> 
        </div>
        <div className="sectionseven-image">
          <div className="sectionimg1">
          <img src={babycenter} alt="babycenter" />
          </div>
          <div className="sectionimg2">
          <img src={babycenter2} alt="babycenter2" />
          </div>
        </div>
        </div>
    )
}

export default Sectionseven