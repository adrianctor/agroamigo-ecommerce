import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Video = () => {
    const src = "https://www.youtube.com/embed/j8GP_oTYAQA";
    return (
        <section>
            <Container>
            <Row>

                <Col className='align-items-center justify-content-center d-f'>
                {/* <div className='ratio ratio16x9'> */}
                    <iframe
                        className='text-center align-items-center'
                        width="100%"
                        height="400"
                        title="Video Agroamigo"
                        //frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        src={src}
                        allowFullScreen
                    />
                {/* </div> */}
                </Col>
            </Row>
            </Container>
            
        </section>
    );
}

export default Video