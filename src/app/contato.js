import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div>
      <h1>Entre em contato conosco</h1>
      <p>Faça um orçamento:</p>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;