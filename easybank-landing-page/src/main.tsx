import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import './index.css';
import { HomePage } from './pages/HomePage/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <HomePage />
    <Footer />
  </React.StrictMode>,
);
