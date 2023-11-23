// SocialJusticeHeader
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SocialJusticeHeader = () => {
  return (
    <Container className="p-0 text-start d-flex align-items-center bg-white card-box-shadow">
      <Row className="align-items-center" style={{ height: '100vh' }}>
        <Col sm={12} md={6} className="p-5">
          <h1>We invest in transformative ideas, individuals and institutions</h1>
          <p>We’re reimagining philanthropy to catalyze leaders and organizations driving social justice and building movements across the globe.</p>
          <Button variant="outline-primary">Our grants</Button>
        </Col>
        <Col sm={12} md={6} className="p-0">
          <img src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg" alt="Happy People" className="w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialJusticeHeader;
