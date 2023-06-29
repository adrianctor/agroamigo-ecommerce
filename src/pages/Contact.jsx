import React from 'react';
import bgContact from '../assets/images/bg-contact.jpg';
import '../styles/contact.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <Helmet title="Contacto">
      <CommonSection title="Contacto" />
        <section>
          <Container fluid>
            <Row>
              <Col>
                <>
                  <div className="contact2" id="contact">
                    <div className="container">
                      <div className="row contact-container">
                        <div className="col-lg-12">
                          <div className="card card-shadow border-0 mb-4">
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="contact-box p-4">
                                  <h4 className="title">Contact Us</h4>
                                  <form>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                          <input className="form-control" type="text" placeholder="Nombre" />
                                        </div>
                                      </div>
                                      {/* <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                          <input className="form-control" type="text" placeholder="Correo electrónico" />
                                        </div>
                                      </div> */}
                                      <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                          <input className="form-control" type="text" placeholder="Teléfono" />
                                        </div>
                                      </div>
                                      {/* <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                          <input className="form-control" type="text" placeholder="Dirección" />
                                        </div>
                                      </div> */}
                                      <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                          <input className="form-control" type="text" placeholder="Mensaje" />
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> Enviar <i className="ti-arrow-right"></i></span></button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="col-lg-4 bg-image">
                                <div className="detail-box p-4">
                                  <h5 className="text-white font-weight-light mb-3">Direcciones</h5>
                                  <p className="text-white op-7">Sede Popayán.
                                    <br /> San Bernandino</p>
                                    <p className="text-white op-7">Sede El Tambo.
                                    <br /> San Bernandino</p>
                                  <h5 className="text-white font-weight-light mb-3 mt-4">Llámanos</h5>
                                  <p className="text-white op-7">251 546 9442
                                    <br /> 630 446 8851</p>
                                  {/* <div className="round-social light">
                                    <a href="#" className="ml-0 text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-facebook"></i></a>
                                    <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-twitter"></i></a>
                                    <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-youtube"></i></a>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </Col>
            </Row>
          </Container>
        </section>
      <CommonSection />
    </Helmet >
  )
}

export default Contact