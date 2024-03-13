import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import statement
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
