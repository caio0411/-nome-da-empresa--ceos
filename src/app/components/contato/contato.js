import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className='caixa_maior'>
      <div className="contato" id='contato'>
        <h1 className="titulo">Entre em contato conosco</h1>
        <p className="paragrafo">Faça um orçamento:</p>
        <form>
          <div className="input-container">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder='Ex: João da Silva Moreira' />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" placeholder='Ex: 85984730897' />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Ex: Joaosilva@gmail.com' />
          </div>
          <div className="input-container">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" placeholder='Sua mensagem'></textarea>
          </div>
          <button type="submit" className='envio'>Enviar</button>
        </form>
      </div>
      <div className='imagem_ctt'>
        <img src='images/contato_imagem.svg' alt="Imagem do contato" className='img'/> 
      </div>
    </div>
  );
}

export default Contato;
