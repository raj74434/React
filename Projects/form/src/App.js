import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
// import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Form></Form>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
