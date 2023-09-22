import React from 'react';
import './Contato.css';
import Image from 'next/image';

function Contato() {
  return (
    <div className='caixa_maior'>
      <div className="contato">
        <h1 className="titulo">Entre em contato conosco</h1>
        <p className="paragrafo">Faça um orçamento:</p>
        <form>
          <div className="input-container">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className='envio'>Enviar</button>
        </form>
      </div>
      <div className='imagem_ctt'>
        <Image src="images/contato_imagem.svg" width={750} height={550} alt="Imagem do contato" /> 
      </div>
    </div>
  );
}

export default Contato;
