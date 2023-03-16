import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return <Routes>
    <Route path='/agroamigo-ecommerce' element={<Navigate to='/home'/>}/>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    {/* <Route path='checkout' element={<ProtectedRoute><Checkout/><ProtectedRoute/>}/> */}
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='about' element={<About/>}/>
  </Routes>
}

export default Routers