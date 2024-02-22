import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetUserQuery, useGetOrderByUserIdQuery } from "../api/api";

function Account() {
  // Directly extracting user and token from the authSlice
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Assuming `user` object includes an `id` property
  const userId = user?.id || "";

  // State hooks for user details and orders, initially set to null
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  // API hooks for fetching user details and orders, skipping if no token is present
  const { data: userDetails, isSuccess: userDetailsSuccess } = useGetUserQuery(
    userId,
    {
      skip: !token, // Skip fetching if token is not available
    }
  );

  const { data: orderDetails, isSuccess: orderDetailsSuccess } =
    useGetOrderByUserIdQuery(userId, {
      skip: !token, // Likewise, skip fetching if token is not available
    });

  // useEffect to redirect to login if no token is found and to set state based on API responses
  useEffect(() => {
    if (!token) {
      navigate("/loginForm"); // Redirect to login if no token
    } else {
      if (userDetailsSuccess) {
        setUserData(userDetails); // Set user details state if fetching was successful
      }
      if (orderDetailsSuccess) {
        setOrderData(orderDetails); // Set order details state if fetching was successful
      }
    }
  }, [
    token,
    navigate,
    userDetails,
    userDetailsSuccess,
    orderDetails,
    orderDetailsSuccess,
  ]);

  // Render component UI
  return (
    <Container>
      <Row>
        <Col>
          {userData && (
            <Card>
              <Card.Body>
                <Card.Title>Account Details</Card.Title>
                <Card.Text>
                  <div>Id: {userData.id}</div>
                  <div>First Name: {userData.firstname}</div>
                  <div>Last Name: {userData.lastname}</div>
                  <div>Email: {userData.email}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
          {orderData && <div>{/* Render your order details here */}</div>}
        </Col>
      </Row>
    </Container>
  );
}

export default Account;
