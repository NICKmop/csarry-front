import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage, SubscribePage } from '../pages/Home';
import LoginPage from '../pages/Login/ui/Login';
import styles from "./App.module.css";

// A wrapper component to use useLocation inside Routes
const AnimatedRoutes = () => {
  const location = useLocation(); // Get the current location to trigger animations

  return (
    <div className={styles.pageWrapper}>
      <Routes location={location} key={location.pathname}>
        <Route
            path="/"
            element={
              <div className={styles.page}>
                <LoginPage />
              </div>
            }
          />
        <Route
          path="/login"
          element={
            <div className={styles.page}>
              <LoginPage />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className={styles.page}>
              <HomePage />
            </div>
          }
        />
        <Route
          path="/subscribe"
          element={
            <div className={styles.page}>
              <SubscribePage />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App; 