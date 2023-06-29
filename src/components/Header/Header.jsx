import React, { useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav__links = [
  {
    path: 'home',
    display: 'Inicio'
  },
  {
    path: 'about',
    display: 'Nosotros'
  },
  {
    path: 'shop',
    display: 'Tienda'
  },
  /* {
    path:'cart',
    display:'Carrito'
  }, */
  {
    path: 'contact',
    display: 'Contacto'
  },
  {
    path: 'events',
    display: 'Eventos'
  },

]

const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  }

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Cierre de sesión exitoso. Nos vemos pronto');
      navigate('/home');
    }).catch((error) => {
      toast.error(error.message)
    });
  };

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');
  const navigateToCart = () => {
    navigate('/cart');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };
  const profileActionsToggle = () => profileActionRef.current.classList.toggle('show__profileActions');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>Agroamigo</h1>
                {/* <p>Eslogan agroamigo</p> */}
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav__icons">
              <span className='fav__icon'>
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile d-flex align-items-center justify-content-center'>
                <motion.img className='me-2'
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="Icono usuario"
                  onClick={profileActionsToggle} />
                {
                  currentUser ?
                    <p className='profile__username'>Esteban</p> :
                    ''
                }
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={profileActionsToggle}>
                  {
                    currentUser ?
                      (<div className='d-flex align-items-center justify-content-center flex-column'>
                        {/* <div onClick={logout}>
                      <span>Salir</span>
                    </div> */}
                        {/* <div onClick={logout}> */}
                        <Link onClick={logout} to="/logout">Salir</Link>
                        {/* </div> */}
                        <Link to="/dashboard">Administrar</Link>
                      </div>

                      ) :
                      (<div className='d-flex align-items-center justify-content-center flex-column' >
                        {/* <div className='w-100' onClick={navigateToLogin}>
                      Ingresar
                    </div> */}
                        <Link to="/login">Ingresar</Link>
                        {/* <Link to="/dashboard">Administrar</Link> */}
                      </div>

                      )
                  }
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header