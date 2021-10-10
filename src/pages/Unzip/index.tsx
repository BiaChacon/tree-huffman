import React, { useState, ChangeEvent, FormEvent } from 'react';
import treeHuffman from '../../services/tree-huffman';
import Header from '../../components/Header';
import './styles.css';

const Unzip = () => {

  const [formData, setFormData] = useState({
    text: ''
  });
  const [textOutput, setTextOutput] = useState('');
  const [seeOutput, setSeeOutput] = useState(false);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (formData.text === "" && !seeOutput) {
      setSeeOutput(false);
    } else {
      setTextOutput(treeHuffman.unzip(formData.text));
      setSeeOutput(true);
    }

  }

  return (
    <div id="page-zip">

      <Header />

      <form onSubmit={handleSubmit}>
        <h1>Descompactar Texto</h1>

        <fieldset>
          <div className="field">
            <textarea
              name="text"
              id="text"
              cols={50} rows={15}
              onChange={handleInputChange} />
          </div>
        </fieldset>

        <button type="submit">
          Descompactar
        </button>

        {seeOutput && (<div className="output">
          <legend>
            <h2>Texto Descompactado</h2>
          </legend>
          <label>{textOutput}</label>
        </div>
        )}
      </form>

    </div>
  );
}

export default Unzip;