import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,password);
      const user = userCredential.user;
      setLoading(false);
      toast.success('Bienvenido de nuevo a Agroamigo-Administración');
      navigate('/home');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading? 
              <Col lg='12' className='text-center'>
                <h5 className='fw-bold'>Cargando...</h5>
              </Col>:
              <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Iniciar sesión</h3>
              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Correo electrónico' value={email} onChange={e=>setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='Contraseña' value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">Ingresar</button>
                <p>Si no recuerda sus credenciales de acceso. Por favor <a href='https://api.whatsapp.com/send?phone=+573043483801&text=Hola,%20perdi%20mis%20credenciales%20de%20acceso%20a%20AGROAMIGO:' target='_blank'>contacte al administrador</a></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login
