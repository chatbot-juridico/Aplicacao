import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import logo from '../assets/icons/logo.png';

import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(authToken ? true : false);
  }, []);

  const handleAboutClick = () => {
    if (currentPath === '/') {
      navigate('/about');
    } else {
      navigate('/');
    }
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
    }
    navigate('/login');
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  };

  return (
    <div id='header'>
      <div id='header-area' onClick={() => navigate('/')}>
        <img id='logo' alt='Logo' src={logo}></img>
        <div id='header-title-area'>
          <h1 id='title'>Nome do Produto</h1>
          <p id='subtitle'>Seu assistente jurídico-trabalhista</p>
        </div>
      </div>
      <div id='header-btn-area'>
        {isLoggedIn ? (
          <Button as='a' variant='success' onClick={() => handleProfileClick()}>
            Perfil
          </Button>
        ) : (
          <></>
        )}

        <Button as='a' variant='success' onClick={() => handleAboutClick()}>
          {currentPath === '/' ? 'O Projeto' : 'Chat'}
        </Button>
        <Button as='a' variant='success' onClick={() => handleLoginClick()}>
          {isLoggedIn ? 'Sair' : 'Login'}
        </Button>
      </div>
    </div>
  );
}

export default Header;
