import './App.css';
import Siginbox from './components/Siginbox'
import Homepage from './components/Homepage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Siginbox/>} />  
    <Route path= '/home' element = {<Homepage/>}/>
  </Routes>
  </BrowserRouter>
  </div> 
  );
}

export default App;
