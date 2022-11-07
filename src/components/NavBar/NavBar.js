import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import image from '../../assets/14.jpg';

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            
            <header>RUBICK.AI</header>
            <ul>
                <Link className='link' to='/'><li>Home</li></Link>
                <Link className='link' to='/product'><li>Product</li></Link>
                <Link className='link' to='/features'><li>Features</li></Link>
                <Link className='link' to='/about'><li>About us</li></Link>
                <Link className='link' to='/clients'><li>Clients</li></Link>
            </ul>
            <div>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
        <section className='intro_section'>
            <div>
                <p>The fastest cataloguing solution for you</p>
                <button>sign up</button>
            </div>
            <div>
                {/* <img src='https://via.placeholder.com/550x400' alt='placeholder'/> */}
                <img src={image} alt='placeholder'/>
            </div>
        </section>
    </div>
  )
}
