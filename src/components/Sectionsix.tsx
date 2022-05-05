import React from 'react'
import section51 from "./assets/section51.svg";
import section52 from "./assets/section52.svg";
import section53 from "./assets/section53.svg";
import section54 from "./assets/section54.svg";


function Sectionfive () {
    return (
        <div className="section6">
         <div className="section5-content">
           <h2 className="text5">Baby Diary Blog</h2>
           </div>
         <div className="section5-main">
            <div className="section5-img">
            <img src={section51} alt="section51" />
            <h4 className="text">7 Baby's Checklist</h4>
            <p className="six">From Fertility troubles to baby-name...</p>
            </div>
            <div className="section5-img">
            <img src={section52} alt="section52" />
                <h4 className="text">Awesome baby name ideas</h4>
                <p className="six">From Fertility troubles to baby-name...</p>
            </div>
            <div className="section5-img">
            <img src={section53} alt="section53" />
                <h4 className="text">10 signs you're pregnant</h4>
                <p className="six">From Fertility troubles to baby-name...</p>
            </div>
            <div className="section5-img">
            <img src={section54} alt="section54" />
                <h4 className="text">Pregnancy and back pain</h4>
                <p className="six">From Fertility troubles to baby-name...</p>
                
            </div>
         </div>
    </div>
    )
}

export default Sectionfive