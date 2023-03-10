import React, {useState} from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col } from 'reactstrap';

import '../styles/shop.css'

import products from '../assets/data/products'
import ProductList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData,setProductsData] = useState(products);
  const handleFilter = (e)=>{
    const filteredValue = e.target.value;
    if(filteredValue === 'sofa'){
      const filteredProducts = products.filter((item)=>item.category==='sofa');
      setProductsData(filteredProducts);
    }
    if(filteredValue === 'mobile'){
      const filteredProducts = products.filter((item)=>item.category==='mobile');
      setProductsData(filteredProducts);
    }
    if(filteredValue === 'chair'){
      const filteredProducts = products.filter((item)=>item.category==='chair');
      setProductsData(filteredProducts);
    }
    if(filteredValue === 'watch'){
      const filteredProducts = products.filter((item)=>item.category==='watch');
      setProductsData(filteredProducts);
    }
    if(filteredValue === 'wireless'){
      const filteredProducts = products.filter((item)=>item.category==='wireless');
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e)=>{
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos"/>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filtrar por categoría</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className='text-end'>
            <div className="filter__widget">
                <select>
                  <option>Ordenar por</option>
                  <option value="ascending">Ascendente</option>
                  <option value="descending">Descendente</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder='Buscar...' onChange={handleSearch}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>{
            productsData.length === 0?<h1 className='text-center fs-4'>No products are found!</h1>: <ProductList data={productsData} />
          }</Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop