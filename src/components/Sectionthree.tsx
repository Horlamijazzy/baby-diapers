import React from 'react'
import aa1 from "./assets/aa1.svg";
import aa2 from "./assets/aa2.svg";
import aa3 from "./assets/aa3.svg";
import aa4 from "./assets/aa4.svg";


function Sectionthree () {
    return (
        <div className="sectionthree">
          <h1>Get expert advice and answers</h1>
          <div className="sectionthree-content">
          <div className="aa">
            <div>
            <img src={aa1} alt="aa1" />
              <h3>Is it safe?</h3>
            </div>
          </div>
          <div className='aa'>
            <div>
            <img src={aa2} alt="aa2" />
              <h3>Labour & delivery</h3>
            </div>
          </div>
          <div className='aa'>
            <div>
            <img src={aa3} alt="aa3" />
              <h3>Diapering</h3>
            </div>
          </div>
          <div className='aa'>
            <div>
            <img src={aa4} alt="aa4" />
              <h3>Baby sleep</h3>
            </div>
          </div>  
          </div>          
        </div> 
    )
}

export default Sectionthree