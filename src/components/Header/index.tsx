import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';

const Header = () => {

  return (
    <header>
      <img src={logo} alt="Tree Huffman" />
      <Link to="/">
        <FiArrowLeft />
        Voltar para home
      </Link>
    </header>
  )
}

export default Header;