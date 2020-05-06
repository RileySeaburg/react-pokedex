import React from 'react';
import Pokedex from './Pokedex'
import './App.css';

function App() {
  return (
    <div className="App">
    <Pokedex
      id={4}
      name="Charmander"
      type="fire"
      exp={62}
    />
    </div>
  );
}

export default App;
