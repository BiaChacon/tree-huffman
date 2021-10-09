import React, { useState, ChangeEvent, FormEvent } from 'react';
import treeHuffman from '../../services/tree-huffman';
import Header from '../../components/Header';
import './styles.css';

const Zip = () => {

  const [formData, setFormData] = useState({
    text: ''
  });
  const [textOutput, setTextOutput] = useState('');
  const [textOutputCopy, setTextOutputCopy] = useState('');
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
      var text = treeHuffman.zip(formData.text)
      setTextOutput(text[0]);
      setTextOutputCopy(text[1] + textOutput);
      setSeeOutput(true);
    }

  }

  return (
    <div id="page-zip">

      <Header />

      <form onSubmit={handleSubmit}>
        <h1>Compactar Texto</h1>

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
          Compactar
        </button>

        {seeOutput && (<div className="output">
          <legend>
            <h2>Texto Compactado</h2>
          </legend>
          <label>{textOutput}</label>
          <br />
          <button onClick={() => { navigator.clipboard.writeText(textOutputCopy) }}>
            Copiar
          </button>
        </div>
        )}
      </form>


    </div>
  );
}

export default Zip;