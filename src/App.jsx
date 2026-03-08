import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import './App.css';

const USER_STORAGE_KEY = 'kidsGamesUser';

function App() {
  // 1. Inicializa o estado 'user' lendo do localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });
  // REMOVIDO: const [currentPage, setCurrentPage] = useState('home');

  // 2. Efeito para salvar o 'user' no localStorage e o Netlify Forms
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      
      // Envio de dados para o Netlify Forms a cada sessão
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', user.name);
      formData.append('email', user.email);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  // Função para salvar os dados no localStorage e iniciar a sessão
  const handleLogin = (name, email) => {
    const userData = { name, email };
    setUser(userData); 
    // REMOVIDO: setCurrentPage('home');
  };

  const renderContent = () => {
    // 1. Tela de Login (Se não estiver logado)
    if (!user) {
      return <LoginPage onLoginSuccess={handleLogin} />;
    }

    // 2. Tela Inicial (Se estiver logado, sempre mostra a Home Page)
    // A transição para o jogo será feita pelo link dentro do HomePage
    return (
      <HomePage 
        userName={user.name} 
        // REMOVIDO: onStartGame, pois não é mais necessário
      />
    );
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;