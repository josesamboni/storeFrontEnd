import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/api";
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

const SingleProduct = () => {
  const { id } = useParams();
  // Use the RTK Query hook to get product details
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <Alert variant="danger">An error occurred.</Alert>;

  return (
    <Container className="mt-4">
      <Card>
        {/* Add an image space for the product */}
        <Card.Img variant="top" src={product.imageUrl} alt={product.productName} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          {/* Add more details if wanted */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleProduct;