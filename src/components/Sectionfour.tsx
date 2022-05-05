import React from'react'
import tool1 from "./assets/tool1.svg";
import tool2 from "./assets/tool2.svg";
import tool3 from "./assets/tool3.svg";
import tool4 from "./assets/tool4.svg";
import tool5 from "./assets/tool5.svg";
import tool6 from "./assets/tool6.svg";
import line from "./assets/line.svg";
import el from "./assets/el.svg";

function Sectionfour () {
    return (
        <div className="sectionfour">
         <h1>Explore our tools</h1>
         <div className="tools">
         <div className="tools1">
         <img src={tool1} alt="tool1" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
        <p>Due Date Calculator</p>
         </div>
         <div className="tools1">
         <img src={tool2} alt="tool2" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
         <p>Pregnancy Weight Gain Calculator</p>
         </div>
         <div className="tools1">
         <img src={tool3} alt="tool3" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
         <p>Contraction Timer</p>
         </div>
         <div className="tools1">
         <img src={tool4} alt="tool4" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
         <p>Child Growth Chart</p>
         </div>
         <div className="tools1">
         <img src={tool5} alt="tool5" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
         <p>Immunization Scheduler</p>
         </div>
         <div className="tools1">
         <img src={tool6} alt="tool6" />
         <img src={line} alt="line" />
         <div className="el">
         <img src={el} alt="el" />
         </div>
         <p>Memories Save</p>
         </div>
         </div>
        </div>
    )
}

export default Sectionfour