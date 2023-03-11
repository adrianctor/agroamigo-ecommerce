import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container,Row,Col} from 'reactstrap';

import tdImg from '../assets/images/arm-chair-01.jpg'

const Cart = () => {
  return (
    <Helmet title='carrito'>
      <CommonSection title="Carrito de compras"/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={tdImg} alt="producto" /></td>
                    <td>Modern Arm Chair</td>
                    <td>$299</td>
                    <td>2</td>
                    <td><i class='ri-delete-bin-line'></i></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart