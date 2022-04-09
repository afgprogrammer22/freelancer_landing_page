import React, { useState } from 'react';
import './Navbar.scss';
import { logo } from '../../images/index.js';
import { AiFillCaretDown } from 'react-icons/ai';
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header className='header' id='header'>
      {/* Logo */}
      <a href='/' className='header__navbar-logo'>
        <img src={logo} alt='' />
      </a>
      {/* Navbar Links */}
      <nav className='header__navbar'>
        <ul className='header__navbar-links'>
          <li>
            <a href='#services' className='header__navbar-links__services'>
              <span>Services</span> <AiFillCaretDown />
            </a>
          </li>
          <li>
            <a href='#aboutus'>About us</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
        </ul>
      </nav>

      {/* Left Side Buttons */}
      <div className='header__buttons'>
        <p className='language'>
          <span>EN</span> <AiFillCaretDown />
        </p>
        <button className='contact'>Contact us</button>
      </div>

      {/* Hamburger Menu */}
      {open ? (
        <div
          className={open ? `menu` : 'menu open'}
          onClick={() => setOpen(!open)}
        >
          <span className='top'></span>
          <span className='middle'></span>
          <span className='bottom'></span>
        </div>
      ) : (
        <div
          className={open ? `menu` : 'menu open'}
          onClick={() => setOpen(!open)}
        >
          <span className='top'></span>
          <span className='middle'></span>
          <span className='bottom'></span>
        </div>
      )}

      {/* Mobile Responsive */}

      {!open && (
        <div className='mobile__links'>
          <ul>
            <li>
              <a href='#services'>
                <span>Services</span> <AiFillCaretDown />
              </a>
            </li>
            <li>
              <a href='#aboutus'>About us</a>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
