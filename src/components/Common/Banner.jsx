import React from 'react';
//import { motion } from 'framer-motion';
import bannerImg1 from '../../assets/images/banner1.jpg';
import bannerImg2 from '../../assets/images/banner2.jpg';
import bannerImg3 from '../../assets/images/banner3.jpg';
import { Carousel } from 'react-bootstrap';

function Banner() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImg3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner