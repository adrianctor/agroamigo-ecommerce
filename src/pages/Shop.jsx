import React, { useEffect, useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
//import products from '../assets/data/products;'
import ProductList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';
// import { db } from '../firebase.config';
// import { doc, getDoc } from 'firebase/firestore';

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState(products);
  const [isHandleFilter, setIsHandleFilter] = useState(false);
  //setProductsData(oldArray => [...oldArray, products[0]]);
  //setProductsData(products);
  useEffect(()=>{
    const cargarProducts = async()=>{
      //const {data: products, loading} = await useGetData("products");
      if((products.length!==0 && !loading) && !isHandleFilter){
        setProductsData(products);
      }
    };
    cargarProducts();
  });
  //loading ? setProductsData():setProductsData(products);
  const handleFilter = (e) => {
    const filteredValue = e.target.value;
    setIsHandleFilter(true);
    if (filteredValue === 'Mascotas') {
      const filteredProducts = products.filter((item) => item.category === 'Mascotas');
      setProductsData(filteredProducts);
    }
    if (filteredValue === 'Agro') {
      const filteredProducts = products.filter((item) => item.category === 'Agro');
      setProductsData(filteredProducts);
    }if(filteredValue === "Filtrar por categoría"){
      const filteredProducts = products;
      setProductsData(filteredProducts);
    }
    // if(filteredValue === 'chair'){
    //   const filteredProducts = products.filter((item)=>item.category==='chair');
    //   setProductsData(filteredProducts);
    // }
    // if(filteredValue === 'watch'){
    //   const filteredProducts = products.filter((item)=>item.category==='watch');
    //   setProductsData(filteredProducts);
    // }
    // if(filteredValue === 'wireless'){
    //   const filteredProducts = products.filter((item)=>item.category==='wireless');
    //   setProductsData(filteredProducts);
    // }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filtrar por categoría</option>
                  <option value="Agro">Agro</option>
                  <option value="Mascotas">Mascotas</option>
                  {/* <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option> */}
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className='text-end'>
              {/* <div className="filter__widget">
                <select>
                  <option>Ordenar por</option>
                  <option value="ascending">Ascendente</option>
                  <option value="descending">Descendente</option>
                </select>
              </div> */}
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder='Buscar...' onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>{
            productsData.length === 0 || loading ?
            <h1 className='text-center fs-4'>No se encontraron productos!</h1> :
            <ProductList data={productsData} />
          }</Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop