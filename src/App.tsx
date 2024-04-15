// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WeatherDetailsPage from './Pages/WeatherDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" Component={HomePage} />
        <Route  path="/weather/:cityName" Component={WeatherDetailsPage} />
      </Routes>
    </Router>
  );
};

export default App;
