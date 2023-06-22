import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import PlanetsIndex from './components/PlanetsIndex'

function App() {
  return (
    <div className='outer-body'>
      <div className='inner-body'>
        <Heading/>
        <Routes>
          <Route
            path='/'
            element={<PlanetsIndex/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
