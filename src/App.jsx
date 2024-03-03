// App.js

import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import './App.css';

const products = [
  {
    name: 'Nike Air Max PLUS',
    description: 'Let your attitude have the edge with this tuned Nike Air experience that offers premium stability and unbelievable cushioning. Featuring classic ‘90s style, airy mesh and nature-inspired design lines, it lets you celebrate your defiant style in comfort.',
    image: 'product1.png',
    gradientColor: 'linear-gradient(232deg, rgba(197,246,255,1) 0%, rgba(36,231,222,1) 92%)',
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    image: 'product2.png',
    gradientColor: 'linear-gradient(90deg, rgba(127,200,243,1) 0%, rgba(43,0,201,1) 100%)',
  },
  {
    name: 'Jordan True Flight',
    description: 'The Jordan True Flight takes design elements from the iconic AJ7 to craft a sneaker that brings a classic performance look to streetwear. It features premium leather structured around an internal sleeve for a secure fit thats easy to get on and off. A heel Air unit and long-lasting foam combine for soft underfoot cushioning',
    image: 'product3.png',
    gradientColor: 'linear-gradient(90deg, rgba(251,169,52,1) 0%, rgba(246,255,22,1) 100%)',
  },
];

const App = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedProductIndex(index);
    document.body.style.background = products[index].gradientColor;
  };

  const selectedProduct = products[selectedProductIndex];

  return (
    <div>
      <div className='container'>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand  href="#home">GLITXX</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Nav>
      </Navbar>
      </div>

      <div className="main-container">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="description-container">
                <div className='container-text'>
                  <p className='header-text'>NIKE SHOES</p>
                  <p className='sub-header-text'>{selectedProduct.name}</p>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="thumbnail-container">
                  {products.map((product, index) => (
                    <Image
                      key={index}
                      src={product.image}
                      alt={`Product Thumbnail ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                      className={selectedProductIndex === index ? 'selected' : ''}
                    />
                  ))}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="product-image-container">
                <Image src={selectedProduct.image} alt="Selected Product" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
