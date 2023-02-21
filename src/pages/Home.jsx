import React from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

const Home = () => {
  const year = new Date().getFullYear()
  return <Helmet title={"Inicio"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Productos de tendencia en {year}</p>
              <h2>Consiga Los Mejores Productos Para El Campo</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, assumenda, aspernatur corporis tenetur temporibus in ullam deleniti aliquid sequi eveniet tempore porro illo dignissimos facilis cumque. Ad est facilis quis?</p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Compra ahora</Link></motion.button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home