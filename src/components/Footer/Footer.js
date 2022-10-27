import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div>
            <ul>
                <li className="header">Terms & Policies</li>
                <NavLink to='/terms' style={{color:"white", textDecoration:'none'}}><li>Terms of use</li></NavLink>
                <li>Privacy Policy</li>
            </ul>
            <ul>
                <li className="header">Company</li>
                <li>Home</li>
                <li>Product</li>
                <li>Features</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li className="header">Contact</li>
                <li>(+91) 8861324370</li>
                <li>admin@rubick.ai</li>
            </ul>
            <ul>
                <li className="header">Location</li>
                <li>New 19/1, 4th Cross Rd, 1st Block, Jayanagar, Bengaluru, Karnataka 560011</li>
            </ul>
        </div>
    </footer>
  )
}
