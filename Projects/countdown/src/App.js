import logo from './logo.svg';
import './App.css';
import CountDown from "./components/CountDown"

function App() {
  return (
    <div className="App">
      
      <header className="App-header">

      <CountDown></CountDown>

        <img src={logo} className="App-logo" alt="logo" />
        
      
      </header>
    </div>
  );
}

export default App;
