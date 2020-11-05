import './App.css';
import React from 'react';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import MainPage from './Pages/MainPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <MainPage />
      <Footer />
    </Container>
  );
}

export default App;
