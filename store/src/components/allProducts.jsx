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
  Spinner,
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
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <Alert variant="danger">An error occurred.</Alert>;

  return (
    <Container>
      <h2>J.T.B. Candy Shop</h2>
      {products.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card
                onClick={() => handleCardClick(product.id)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.productName}
                />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    {/* Additional details can be added here */}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info">No products found.</Alert>
      )}
    </Container>
  );
};

export default AllProducts;
