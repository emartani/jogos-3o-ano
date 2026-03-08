// src/components/LoginPage.jsx

import React, { useState } from 'react';
import './LoginPage.css'; 

function LoginPage({ onLoginSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (name && email) {
      onLoginSuccess(name, email); 
    } else {
      alert('Por favor, preencha seu nome e e-mail para começar a jogar!');
    }
  };

  return (
    <div className="login-container">
      <form 
        name="contact" 
        method="POST" 
        action="/success" // Mantenha action="/success" para o Netlify Forms
        data-netlify="true" 
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Título e Subtítulo Atraentes */}
        <h1 className="login-main-title">🚀 Prepare-se para a Diversão! 🎉</h1>
        <p className="login-subtitle">
          Para começar a jogar, preciso saber quem você é! 😊
        </p>

        {/* Campo do Nome */}
        <div className="form-group">
          <label htmlFor="name" className="input-label">
            Qual o seu nome? <span role="img" aria-label="estrela">✨</span>
          </label>
          <p className="input-description">
            Digite seu nome aqui (pode ser o apelido)!
          </p>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="login-input"
            placeholder="Ex: Super João"
          />
        </div>

        {/* Campo do E-mail */}
        <div className="form-group">
          <label htmlFor="email" className="input-label">
            Qual é o seu e-mail? <span role="img" aria-label="envelope">✉️</span>
          </label>
          <p className="input-description">
            Peça ajuda para um adulto para digitar seu e-mail.
          </p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
            placeholder="Ex: adulto@email.com"
          />
        </div>

        <button type="submit" className="login-button">
          Entrar e Jogar! 🎮
        </button>
      </form>
    </div>
  );
}

export default LoginPage;