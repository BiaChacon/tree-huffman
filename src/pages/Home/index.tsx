import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Tree Huffman" />
        </header>
        <main>
          <h1>Huffman</h1>
          <p>Compactação de dados com árvore de huffman</p>
          <Link to="/zip">
            <span>
              <FiLogIn />
            </span>
            <strong>Compactar Texto</strong>
          </Link>
          <Link to="/unzip">
            <span>
              <FiLogIn />
            </span>
            <strong>Descompactar Texto</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;