import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Contact from './pages/Contact';
import Category from './pages/Category';
import About from './pages/About';
import Product from './pages/Product';
import ProductAdmin from './admin/ProductAdmin';
import Login from './pages/Login';
import DetailInfo from './pages/DetailInfo';
import Dashboard from './admin/Dashboard';
import AddProduct from './admin/AddProduct';
import ProdByCategory from './pages/ProdByCategory';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<DetailInfo/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/adminProds' element={<ProductAdmin/>} />
        <Route path='/addProduct' element={<AddProduct/>} />
        <Route path='/category/:categoryName' element={<ProdByCategory/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App