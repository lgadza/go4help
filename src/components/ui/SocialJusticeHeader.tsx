// SocialJusticeHeader
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SocialJusticeHeader = () => {
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center" style={{ minHeight: '100vh' }}>
        <Col sm={12} md={6} className="p-5">
          <h1>We invest in transformative ideas, individuals and institutions</h1>
          <p>We’re reimagining philanthropy to catalyze leaders and organizations driving social justice and building movements across the globe.</p>
          <Button variant="outline-primary">Our grants</Button>
        </Col>
        <Col sm={12} md={6} className="p-0">
        
          <img src="https://media.istockphoto.com/id/1472932742/pl/zdj%C4%99cie/grupa-wielopokoleniowych-ludzi-przytulaj%C4%85cych-si%C4%99-do-siebie-koncepcja-wsparcia.jpg?s=612x612&w=0&k=20&c=J7I1kokjNs6FDYLZOUuu4XNvPqE-ieL-Xi-g12Panbw=" alt="Happy People" className="w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialJusticeHeader;
