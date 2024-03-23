import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage/Register';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
