import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import { useNavigate, Route,Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from './assets/logo.png'
import cart_logo from './assets/cart_logo.png'

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const navigate=useNavigate();
  const location=useLocation();
  const [user,setUser]=useState("");
  const [cartItems,setCartItems]=useState({});
  
  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[])

  const handleAddToCart=(item)=>{
    setCartItems({...cartItems, ...item})
  }

  const handleLogout = () =>{
    setUser("");
    localStorage.removeItem('userEmail');
    navigate('/login');
  }

  const handleClearCart=()=>{
    setCartItems({});
  }
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div>
      <Navbar className="instabuy-navbar">
        <Navbar.Brand  className='branding' onClick={()=>navigate('/')} style={{cursor:'pointer'}}>
          <img src={Logo} alt="" />
          <h4>InstaBuy!</h4>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=>navigate('/cart')} style={{backgroundColor:"transparent", outline:"none", border:"none"}}>
            <img src={cart_logo}  style={{height:"2.5rem", width:"2.5rem"}} alt="" />
            {Object.keys(cartItems).length>0 && <Badge style={{borderRadius:"50%", marginRight:"1rem"}} bg='success'>{Object.keys(cartItems).length}</Badge>}
          </Button>}
          
          {!isAuthPage && (
            <Button onClick={() => {
              if (user) {
                handleLogout();
              } else {
                navigate('/login'); 
              }
            }}>
              {user ? 'Logout' : "Login"}
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route  path='/' element={<Home user={user}/>}/>
        <Route  path='/login' element={<Login setUser={setUser}/>}/>
        <Route  path='/signup' element={<Signup setUser={setUser}/>}/>
        <Route  path='/productsGallery' element={<ProductGallery />}/>
        <Route  path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
        <Route  path='/cart' element={<Cart cartItems={cartItems} handleClearCart={handleClearCart}/>}/>
        <Route  path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App;
