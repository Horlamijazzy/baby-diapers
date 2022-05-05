import React from 'react'

import footerLogo from "./assets/footerLogo.svg"
import footerIcons from "./assets/footerIcons.svg"

function Footer () {
  return (
    <div className="footer">
    <hr />
    <div className="footer-content">
    <div className="about">
        <h4 className="text6">About</h4>
    <div className="about-content">
        <div className="main">
    <ul>
            <li>Careers</li>
            <li>Rest & News</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="inner">
            <ul>
                <li>Terms of Service</li>
                <li>Intellectual Property Claims</li>
            </ul>
            </div>
            </div>  
    </div>
    <div className="support">
    <h4 className="text6">Support</h4>
        <div className="support-content">
        <div className="main">
            <ul>
                <li>FAQ</li>
                <li>Help & Support</li>
            </ul>
        </div>
        <div className="inner">
            <ul>
                <li>Trust & Safety</li>
                <li>Contact us</li>
            </ul>
        </div>
        </div>
    </div>
    <div className="community">
    <h4 className="text6">Community</h4>
    <div className="community-content">
    <div className="main">
    <ul>
            <li>Blog</li>
            <li>Forum</li>
            <li>Podcast</li>
        </ul>
        </div>
        <div className="inner">
            <ul>
                <li>Affiliates</li>
                <li>Invite a Friend</li>
            </ul>
            </div>
            </div> 
    </div>
    </div>
    <p className="p1">All rights reserved. Baby Diary is designed for educational purposes only. </p>
    <p className="p2">Consult with a medical professional if you have health concerns. use of this site is subject to our <span className="foot">Terms of use</span> and <span className="foot">Privacy Policy</span></p>
    <hr />
    <div className="footer-icon-section">
        <img src={footerLogo} alt="" /> 
        <span className="copy"> &#169; Baby Diary. 2020</span>
        <img src={footerIcons} alt="" className="footer-icons"/>
    </div>
  </div>
  )
}

export default Footer