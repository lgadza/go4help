import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HandThumbsUp, Heart, People, Globe } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesSection.css'; 
import NavigationBar from '../components/ui/NavigationBar';
import PartnerSlider from '../components/ui/PartnerSlider';

const ServicesSection = () => {
  return (
    <Container fluid className="px-0 page">
        <NavigationBar/>
    <Container className='mt-5'>
      <Row className="justify-content-md-center pt-5 ServicesSection text-center">
        <Col md={12}>
          <h2>What do we do?</h2>
        </Col>
        <Col md={3}>
          <HandThumbsUp size={50} />
          <h3>Social Help</h3>
          <p>Actions for community welfare, family support, and individuals in difficult life situations.</p>
        </Col>
        <Col md={3}>
          <Heart size={50} />
          <h3>Charitable Activities</h3>
          <p>Emergency, material, humanitarian aid, including accommodation, transport, and long-term assistance.</p>
        </Col>
        <Col md={3}>
          <People size={50} />
          <h3>War Victims Assistance</h3>
          <p>Support for victims of conflicts and wars, especially in the field of social inequality.</p>
        </Col>
        <Col md={3}>
          <Globe size={50} />
          <h3>Foreigners Integration</h3>
          <p>International integration activities, developing contacts and cooperation between communities.</p>
        </Col>
        <Col md={12} className="mt-4">
          <Button variant="danger">Donate Now</Button>
        </Col>
      </Row>
    </Container>
    <PartnerSlider/>
    </Container>
  );
};

export default ServicesSection;
