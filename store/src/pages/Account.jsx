import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetUserQuery, useGetOrderByUserIdQuery } from "../api/api";

function Account() {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const userId = user?.id || "";

  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const { data: userDetails, isSuccess: userDetailsSuccess } = useGetUserQuery(userId, { skip: !token });
  const { data: orderDetails, isSuccess: orderDetailsSuccess } = useGetOrderByUserIdQuery(userId, { skip: !token });

  useEffect(() => {
    if (!token) {
      navigate("/loginForm");
    } else {
      if (userDetailsSuccess) {
        setUserData(userDetails);
      }
      if (orderDetailsSuccess) {
        setOrderData(orderDetails);
      }
    }
  }, [token, navigate, userDetails, userDetailsSuccess, orderDetails, orderDetailsSuccess]);

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          {userData && (
            <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '22px', fontWeight: 'bold' }}>Account Details</Card.Title>
                <Card.Text style={{ fontSize: '16px' }}>
                  <div>Id: {userData.id}</div>
                  <div>First Name: {userData.firstname}</div>
                  <div>Last Name: {userData.lastname}</div>
                  <div>Email: {userData.email}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
          {orderData && (
            <div style={{ fontSize: '16px' }}>
              {/* Render your order details here with similar styling */}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Account;