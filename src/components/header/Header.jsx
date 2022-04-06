import React from 'react'
import './Header.scss';
import { logo } from '../../images/index.js';
import { AiFillCaretDown } from 'react-icons/ai'
const Header = () => {
  return (
    <header className='header' id="header">
        <nav className='header__navbar'>
            <a href="/" className='header__navbar-logo'>
                <img src={logo} alt="" />
            </a>
            <ul className='header__navbar-links'>
                <li><a href="#" className='header__navbar-links__services'><span>Services</span> <AiFillCaretDown /></a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div className='header__buttons'>
                <div className='header__buttons-language'>
                    <p className='header__buttons-language__en'><span>EN</span> <AiFillCaretDown /></p>
                </div>
                <button className='header__buttons-contact'>Contact us</button>
            </div>
        </nav>
    </header>
  )
}

export default Header
