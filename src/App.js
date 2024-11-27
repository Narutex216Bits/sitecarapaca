import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './Pages/Aboutus'; // Se a pasta for "Pages" (com maiúscula)
import Dashboard from './Pages/Dashboard';

function App() {
  const [callsign, setCallsign] = useState('');
  
  const handleSearch = () => {
    // Aqui você pode colocar a lógica para buscar as informações no banco de dados
    console.log("Buscando informações para:", callsign);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="search-section">
          <input
            type="text"
            placeholder="Digite o seu Callsign"
            value={callsign}
            onChange={(e) => setCallsign(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
