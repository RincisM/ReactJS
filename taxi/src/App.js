import './App.css';
import Taxi from './Components/Taxi';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState();
  return (
    <div className='card'>
      <div className="App">
        <Taxi />
    </div>
    </div>
  );
}

export default App;
