import React from 'react';
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className='text-white'>Agroamigo</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur at eum harum odio atque accusamus inventore error repellendus assumenda.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Mejores Categorías</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Teléfonos Celulares</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Sofá Modernos</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Sillas</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Enlaces Útiles</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Tienda Online</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Carrito de Compras</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Iniciar Sesión</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Política de privacidad</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacto</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Calle 5 # 16-28, Popayán, Cauca</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+57 3043483801</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>sedepopayan@agroamigo.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} desarrollado por Adrián Camilo Torres Gómez. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer