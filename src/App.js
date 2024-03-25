import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage/Register';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Invoice from './pages/Invoice/Invoice';
import Checkout from './pages/Checkout/Checkout';
import ProductDetails from './pages/Product/ProductDetails';
function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />{' '}
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
