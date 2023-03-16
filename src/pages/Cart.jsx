import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container,Row,Col} from 'reactstrap';

import { motion } from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector((state)=>state.cart.cartItems);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const base = 'https://api.whatsapp.com/send?phone=+573043483801&text=Hola,%20estoy%20comprando:';
 /*  const urlComplete = base + cartItems.map((item)=>(
    urlComplete = urlComplete+item.productName
  )); */
  return (
    <Helmet title='carrito'>
      <CommonSection title="Carrito de compras"/>
      <section>
        <Container>
          <Row>

            <Col lg='9'>
              {
                cartItems.length===0?
                <h2 className='fs-4 text-center'>No se han agregado productos al carrito</h2>:
                <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Imágen</th>
                    <th>Titulo</th>
                    <th className='text-center'>Precio</th>
                    <th className='text-center'>Cantidad</th>
                    <th className='text-center'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      cartItems.map((item,index)=>(
                        <Tr item={item} key={index}/>
                      ))
                    }
                </tbody>
              </table>
              }
              
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between fs-4'>
                  Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
                
                <p className='fs-6 mt-3'>Tu compra se procesará por medio de WhatsApp para que tengas los mejores descuentos de la tienda</p>
                <div>
                  <button className="buy__btn w-100">
                    <a href={base} target="_blank"
        rel="noreferrer" className='d-flex align-items-center justify-content-center'>
                      <i className="ri-whatsapp-line fs-5 me-3"></i>
                      Comprar en WhatsApp
                    </a>
                  </button>
                  <button className="buy__btn w-100 mt-3">
                    <Link to='/shop'>Seguir comprando</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({item})=>{
  const dispatch = useDispatch();
  const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id));
  }
  return <tr>
  <td><img src={item.image} alt={item.productName} /></td>
  <td>{item.productName}</td>
  <td className='text-center'>{item.price}</td>
  <td className='text-center'>{item.quantity}</td>
  <motion.td whileTap={{scale:1.2}} className='text-center'><i onClick={deleteProduct} className='ri-delete-bin-line'></i></motion.td>
</tr>
}

export default Cart