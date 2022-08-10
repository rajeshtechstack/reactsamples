import logo from './logo.svg';
import './App.css';
import Sample from './components/sample';
import Hello from './components/Hello'
import SampleEX from './components/SampleEx';
function App() {
  return (
    <div className="App">
      <Sample />
      <Hello name="Rajesh"/>
      <SampleEX />
    </div>
  );
}

export default App;
