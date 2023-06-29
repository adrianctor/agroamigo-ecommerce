import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {data: products } = useGetData("products");
  const navigate = useNavigate();
  return (<>
    <section>
      <Container>
        <Row>
          <Col className="lg-3 text-center">
            <div className="revenue__box">
              <h5>Número de ventas</h5>
              <span>Proximamente</span>
            </div>
          </Col>
          <Col className="lg-3 text-center">
            <div className="orders__box">
              <h5>Pedidos</h5>
              <span>Proximamente</span>
            </div>
          </Col>
          <Col className="lg-3 text-center">
            <div className="products__box">
              <h5>Total de productos</h5>
              <span>{products.length}</span>
              <motion.button onClick={()=>{navigate("/dashboard/add-product");}}>Agregar producto</motion.button>
            </div>
          </Col>
          <Col className="lg-3 text-center">
            <div className="users__box">
              <h5>Número de usuarios</h5>
              <span>1</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>);
}

export default Dashboard