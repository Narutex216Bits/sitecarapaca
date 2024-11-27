import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Troque o caminho para o logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo do Projeto" className="navbar-logo" />
        <span>Projeto Carapaça</span>
      </div>
      <div className="navbar-right">
        <Link to="/about-us">Sobre Nós</Link>
      </div>
    </nav>
  );
};

export default Navbar;
