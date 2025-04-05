import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import LoginPage from '../pages/Login/ui/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 