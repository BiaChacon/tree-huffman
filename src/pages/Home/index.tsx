import React from 'react';
import { BsFileZip } from 'react-icons/bs';
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
          <h1>Algoritmo de Huffman</h1>
          <p>Compactação de dados com árvore de huffman</p>
          <Link to="/zip">
            <span>
              <BsFileZip />
            </span>
            <strong>Compactar Texto</strong>
          </Link>
          <Link to="/unzip">
            <span>
              <BsFileZip />
            </span>
            <strong>Descompactar Texto</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;