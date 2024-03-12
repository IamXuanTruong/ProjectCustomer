import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Template/Pages/Home/Home';
import MasterLayout from './Template/Layouts/MasterLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MasterLayout Page={<Home />} />} />
      </Routes>

    </div>
  );
}

export default App;
