import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import { Login } from './Login';
import { RegistroUsuario } from './Registro';
import HomePage from './HomePage';
import { EditarProductos } from './Editar';


function App() {

  const [user, setUser] = useState([])
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (producto) => {

    //if (!cartItems.find((item) => item.ID === producto.ID)) {
    setCartItems([...cartItems, producto]);
    // }
  };

  return (
    <>
     
     <NavBar/>

        <Routes>
        <Route path='/editar' element = {<EditarProductos/>}></Route>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/registroUsuario' element = {<RegistroUsuario/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        

        </Routes>



    </>
  );
}
export default App;