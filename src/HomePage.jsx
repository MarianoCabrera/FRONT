import './App.css';
import NavBar from './NavBar';
import { ListadoProductos } from './Productos';
import * as API from './servicios/servicios';
import { useEffect, useState, } from 'react';
import React from "react";
import { Link } from "react-router-dom";


export default function HomePage({addToCart}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.getProductos().then(setProductos)
  }, [])

  return (
    <>
      <header className='cabecera'>
      </header>
      <div>
        <ListadoProductos/>
      </div>
    </>
  );
}