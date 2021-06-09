import React, { useState } from 'react';
import Logo from './../../assets/tailwind-css-logo.svg';
import { Link } from 'react-router-dom';
import './index.css'
const Header = ({
  ...otherProps
}) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-white relative">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">

      <div className="w-14">
        <img src={Logo} className="w-full" />
      </div>

      <div
        onClick={onClick}
        className={`
          md:hidden uppercase
        `}
      >
        Menu
      </div>

      <nav
        className={`
          ${!active && 'hidden'}
          absolute flex flex-col bg-white top-full w-full left-0 z-20
          md:static md:w-auto md:flex
        `}
      >
        <ul className="md:flex-row md:flex">
          <li className=" link list-none md:mr-5">
          <a href="#home">Home</a> 
          </li>

          <li className="link list-none md:mr-5">
           <a href="#gallery">Gallery</a> 
          </li>

          <li className="link list-none md:mr-5">
          <a href="#contact">Contact</a> 
          </li>
        </ul>
      </nav>

      </div>

    </header>
  );
};

export default Header;
