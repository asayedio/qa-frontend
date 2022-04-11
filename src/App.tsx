import React from 'react';
import './App.module.css';
import { Header } from './header';
import { HomePage } from './HomePage';

function App() {
  return (
    <div className="styles.container">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
