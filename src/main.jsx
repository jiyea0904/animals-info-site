import React from 'react';
import { createRoot } from 'react-dom/client';  // "react-dom/client"에서 createRoot를 가져옵니다.
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// React 애플리케이션을 '#root' 요소에 렌더링
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
