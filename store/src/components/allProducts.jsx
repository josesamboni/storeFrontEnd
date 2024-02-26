//import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useGetProductsQuery } from "../api/api";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
  Spinner
} from "react-bootstrap";

const AllProducts = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // Use the RTK Query hook to fetch products
  const { data: products, error, isLoading } = useGetProductsQuery();

  // Handler for navigating to the product detail page
  const handleCardClick = (productId) => {
    navigate(`/singleProduct/${productId}`); // Navigate to the product detail page
  };

  if (isLoading)
    return (
      <Spinner animation="border" role="status" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
    if (error) return <Alert variant="danger" style={{ marginTop: '20px', textAlign: 'center' }}>An error occurred.</Alert>;

   return (
    <Container style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#007bff' }}>J.T.B. Candy Shop</h2>
      {products.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card
                onClick={() => handleCardClick(product.id)}
                style={{ cursor: "pointer", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <Card.Img 
                  variant="top"
                  src={product.imageUrl}
                  alt={product.productName}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body style={{ backgroundColor: '#007bff' }}>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: '#007bff' }}>Price: ${product.price}</ListGroup.Item>
                    {/* Additional details can be added here */}
                  </ListGroup>
                  
                </Card.Body>
            
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info" style={{ textAlign: 'center' }}>No products found.</Alert>
      )}
    </Container>
  );
};

export default AllProducts;