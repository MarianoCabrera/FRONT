import React, { useState, useEffect } from "react";
import * as API from './servicios/servicios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ListadoProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.getProductos()
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div>
      <Row>
        {productos.map(producto => (
          <Col key={producto.idproducto} xs={12} md={6} lg={4}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={producto.imageURL} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Link to={`/carrito/${producto.idproducto}`}>
                  <Button variant="primary">Agregar al carrito</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
