import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>
              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Correo electrónico' value={email} onChange={e=>setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Contraseña' value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">Ingresar</button>
                <p>Si no recuerda sus credenciales de acceso. Por favor <a href='https://api.whatsapp.com/send?phone=+573043483801&text=Hola,%20perdi%20mis%20credenciales%20de%20acceso%20a%20AGROAMIGO:' target='_blank'>contacte al administrador</a></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login
