import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar2.css';

export default function NavBar2({title}) {
  return (
    <div className='navbar2'>
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
        <h1>{title}</h1>
    </div>
  )
}
