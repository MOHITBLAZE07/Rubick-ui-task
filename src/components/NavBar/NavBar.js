import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            
            <header>RUBICK.AI</header>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Features</li>
                <li>About us</li>
                <li>Clients</li>
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
                <img src='https://via.placeholder.com/550x400' alt='placeholder'/>
            </div>
        </section>
    </div>
  )
}
