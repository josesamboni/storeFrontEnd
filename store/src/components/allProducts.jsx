
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
  // Use the RTK Query hook to fetch products
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <Alert variant="danger">An error occurred.</Alert>;

  return (
    <Container>
      <h2>All Products</h2>
      {products.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    {/* Can add more details if we would like */}
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
