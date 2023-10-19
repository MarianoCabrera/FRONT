import React, { useState, useEffect } from "react";
import * as API from './servicios/servicios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function EditarProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.getProductos()
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  const handleEditarProducto = (id) => {
    // Implementa la lógica para editar un producto
  };

  const handleBorrarProducto = (id) => {
    // Implementa la lógica para borrar un producto
  };



  return (
    <div>
      <Row>
        <Col>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.idproducto}>
                  <td><img src={producto.imageURL} alt={producto.nombre} style={{ maxWidth: '100px' }} /></td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>
                    <Link to={`/carrito/${producto.idproducto}`}>
                    </Link>
                    <Button variant="warning" onClick={() => handleEditarProducto(producto.idproducto)}>Editar</Button>
                    <Button variant="danger" onClick={() => handleBorrarProducto(producto.idproducto)}>Borrar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mb-3">
            <Link to="/nuevo-producto">
              <Button variant="success">Añadir Nuevo Producto</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}