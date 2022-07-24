import logo from './logo.svg';
import './App.css';
import First from "./Components/First"
import Second from "./Components/Second";
import Third from './Components/Third';

function App() {
  return (
    <div className='App' >
      <div className='desktop'>
        <First />
        <Second />
      </div>
      <Third />
    </div>
  );
}

export default App;
