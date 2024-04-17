import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';

import background from './assets/images/not-found-background.jpg';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`, // Corrigido aqui
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: '#FFF',
          fontWeight: 'bold',
          position: 'absolute',
          top: '20vh',
          left: '25vw',
        }}
      >
        Você não deveria estar aqui... Por que você está aqui?
      </h1>
      <h1
        style={{
          color: '#FFF',
          fontWeight: 'bold',
          position: 'absolute',
          top: '42vh',
          left: '60vw',
          fontSize: '115px',
        }}
      >
        Sai
      </h1>
      <p
        style={{
          color: '#FFF',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 0,
          right: '25px',
          fontSize: '18px',
        }}
      >
        Por favor...?
      </p>
    </div>
  );
}

export default App;
