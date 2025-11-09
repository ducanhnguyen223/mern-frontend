import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Trigger CD pipeline
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/') // Replace with your Render backend URL later
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Deployment test: Vercel should show this new message.</p>
        <p>Backend says: {message}</p>
      </header>
    </div>
  );
}

export default App;
