import React from 'react';
import '../styles/about.css'
import Member1 from '../assets/images/Member1.jpg';
import Member2 from '../assets/images/Member2.jpg';
import Member3 from '../assets/images/Member3.png';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PinterestIcon from '@mui/icons-material/Pinterest';

const About = () => {
  return (
    <Helmet title="Nosotros">
      <CommonSection title="Nuestro equipo" />
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div id='model1'>
                <div className="members">
                  <div className="member">
                    <img width={400} height={400} src={Member1} />
                    <div className="description">
                      <h1>Esteban Gutierrez</h1>
                      <h2>Administrador</h2>
                      <p>
                        Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                      </p>
                      <div className="social-media">
                        {/* <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon /> */}
                      </div>
                    </div>
                  </div>
                  <div className="member">
                    <img width={400} src={Member2} />
                    <div className="description">
                      <h1>Omar Nadir</h1>
                      <h2>CEO</h2>
                      <p>
                        Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                      </p>
                      <div className="social-media">
                        {/* <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon /> */}
                      </div>
                    </div>
                  </div>
                  <div className="member">
                    <img width={400} src={Member3} />
                    <div className="description">
                      <h1>Khaled MAHER</h1>
                      <h2>CEO</h2>
                      <p>
                        Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                      </p>
                      <div className="social-media">
                        {/* <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CommonSection />
    </Helmet>
  );
}

export default About