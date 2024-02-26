import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/api";
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';

const SingleProduct = () => {
  const { id } = useParams();
  // Use the RTK Query hook to get product details
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading)
    return (
      <Spinner animation="border" role="status" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error)
    return (
      <Alert variant="danger" style={{ marginTop: '20px', textAlign: 'center' }}>
        An error occurred.
      </Alert>
    );

    function addToCart(product) {
      let cart = localStorage.getItem("cart")
      let {name, id, price} = product;

      let newItem = {
        "id": id,
        "quantity": 1,
        "price": price * this.quantity,
      }

      if (cart) {
        let cartDetail = cart[name]
        if (cartDetail) {
          cartDetail.quantity += 1;
        } else {
          cart[name] = newItem
        }
      } else {
        let cart = {};
        cart[name] = newItem;
        localStorage.setItem("cart", cart);
      }
    }

  return (
    <Container className="mt-4" style={{ maxWidth: '800px', margin: 'auto', }}>
      <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px',  }}>
        <Card.Img variant="top" src={product.imageUrl} alt={product.productName} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', objectFit: 'cover', height: '400px' }} />
        <Card.Body style={{ padding: '20px', }}>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px',  }}>{product.productName}</Card.Title>
          <Card.Text style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>{product.description}</Card.Text>
          <Card.Text style={{ fontSize: '18px', fontWeight: 'bold' }}>Price: ${product.price}</Card.Text>
          {/* Add more details if wanted */}
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};



export default SingleProduct;