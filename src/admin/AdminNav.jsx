import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useAuth from '../custom-hooks/useAuth';
// import { current } from '@reduxjs/toolkit';
import userIcon from '../assets/images/user-icon.png'
import '../styles/admin-nav.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const admin__nav = [
  {
    display: 'Panel principal',
    path: '/dashboard'
  },
  {
    display: 'Todos los Productos',
    path: '/dashboard/all-products'
  }
];

const AdminNav = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const profileActionRef = useRef(null);
  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Cierre de sesión exitoso. Nos vemos pronto');
      navigate('/home');
    }).catch((error) => {
      toast.error(error.message)
    });
  };
  const profileActionsToggle = () => profileActionRef.current.classList.toggle('show__profileActions');
  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className='admin__nav-wrapper-top'>
              <div className="logo">
                <Link to="/home">Agroamigo</Link>
              </div>
              <div className="search__box">
                <input type="text" placeholder='Buscar...' />
                <span><i className="ri-search-line"></i></span>
              </div>
              <div className="admin__nav-top-right">
                <span><i className="ri-notification-3-line"></i></span>
                <span><i className="ri-settings-2-line"></i></span>
                {/* <img src={userIcon} alt="" /> */}
                <div className='profile d-flex align-items-center justify-content-center'>
                  <motion.img className='me-2'
                    whileTap={{ scale: 1.2 }}
                    src={userIcon}
                    alt="Icono usuario"
                    onClick={profileActionsToggle} />
                  <div
                    className="profile__actions"
                    ref={profileActionRef}
                    onClick={profileActionsToggle}>

                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      {/* <div onClick={logout}>
                        <span>Salir</span>
                      </div> */}
                      {/* <div onClick={logout}> */}
                      <Link onClick={logout} to="/logout">Salir</Link>
                      {/* </div> */}
                      <Link to="/home">Principal</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {
                  admin__nav.map((item, index) => (
                    <li className="admin__menu-item" key={index}>
                      <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__admin-menu' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AdminNav