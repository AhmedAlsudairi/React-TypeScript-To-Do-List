import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './components/textField';

function App() {
  return (
    <div className="App">
      <br></br>
      <h1>To Do List</h1>
      <TextField text="Ahmed" />
    </div>
  );
}

export default App;
