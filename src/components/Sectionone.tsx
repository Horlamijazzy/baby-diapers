import React from 'react'
import pregimg from "./assets/pregimg.svg";

function Sectionone () {
    return (
        <div className="sectionone">
         <h1 className="sectionone-heading">Your pregnancy week by week</h1>
         <img src={pregimg} alt="pregimg" />
        </div>
    )
}

export default Sectionone