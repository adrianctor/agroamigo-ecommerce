import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
//import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Video from '../components/UI/Video';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png';

import useGetData from '../custom-hooks/useGetData';
import Banner from '../components/Common/Banner';

const Home = () => {
  const {data:products, loading} = useGetData("products");
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  // const [mobileProducts, setMobileProducts] = useState([]);
  // const [wirelessProducts, setWirelessProducts] = useState([]);
  // const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'Mascotas'
    );
    const filteredBestSalesProducts = products.filter(item => item.category === 'Agro'
    );
    // const filteredMobileProducts = products.filter(item => item.category === 'Vacunas'
    // );
    // const filteredWirelessProducts = products.filter(item => item.category === 'Ganado'
    // );
    // const filteredPopularProducts = products.filter(item => item.category === 'Semillas'
    // );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    // setMobileProducts(filteredMobileProducts);
    // setWirelessProducts(filteredWirelessProducts);
    // setPopularProducts(filteredPopularProducts);
  }, [products]);
  return <Helmet title={"Inicio"}>
    <section className="hero__section">
      <Container fluid>
        <Row>
          {/* <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Productos en tendencia del {year}</p>
              <h2>Consiga Los Mejores Productos Para El Campo</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, assumenda, aspernatur corporis tenetur temporibus in ullam deleniti aliquid sequi eveniet tempore porro illo dignissimos facilis cumque. Ad est facilis quis?</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to="/shop">Compra ahora</Link></motion.button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col> */}
          <Col lg="12" md="6">
            <Banner/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* <Services /> */}
    <Video/>

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Productos en tendencia</h2>
          </Col>

          {
            loading ? <h5 className='fw-bold'>Cargando...</h5>:
            <ProductsList data={trendingProducts} />
          }  
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg="6" md="12" className='count__down-col'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Ofertas Limitadas</h4>
              <h3 className='text-white fs-5 mb-3'>Sillas de Calidad</h3>
            </div>
            <Clock />
            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn">
              <Link to="/shop">Visitar Tienda</Link>
            </motion.button>
          </Col>
          <Col lg="6" md="12" className='text-end counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Más vendidos</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Cargando...</h5>:
            <ProductsList data={bestSalesProducts} />
          }  
        </Row>
      </Container>
    </section>

    {/*     <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Nuevos Productos</h2>
          </Col>
          <ProductsList data={mobileProducts}/>
          <ProductsList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Populares</h2>
          </Col>
          <ProductsList data={popularProducts}/>
        </Row>
      </Container>
    </section> */}
  </Helmet>
}

export default Home