import React from 'react'
import search from "./assets/search.svg";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav">
                    <form>
                    <img src={search} alt="search" />
                        <input type="text" placeholder="    Find Information"/><button className="button-form">Search</button>
                          
                </form>
                <div className="form-link">
                <a href="#" className="form_link">About Baby Diary</a>
                        <a href="#" className="form_link">Sign in</a>
                        <button className="button-link">Sign up</button>
                </div>
                
                </div>
             <ul className="nav_item">
                 <li className="nav_link">
                  <a href="#" className="nav_link">community</a>   
                 </li>
                 <li className="nav_link">
                  <a href="#" className="nav_link">Getting Pregnant</a>   
                 </li>
                 <li className="nav_link">
                  <a href="#" className="nav_link">Pregnancy</a>   
                 </li>
                 <li className="nav_link">
                  <a href="#" className="nav_link">Baby</a>   
                 </li>
                 <li className="nav_link">
                  <a href="#" className="nav_link">Health</a>   
                 </li>
                  <li className="nav_link">
                  <a href="#" className="nav_link">Video</a>   
                 </li>
                 <li className="nav_link">
                  <a href="#" className="nav_link">For you</a>   
                 </li>
             </ul>
                 
            </nav>    
        </div>    
    )
}

export default Navbar;