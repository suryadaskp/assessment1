/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/h" element={<Home/>}/>
        <Route path="/a" element={<Add/>}/>
        
     </Routes>
    </div>
  );
}

export default App;
