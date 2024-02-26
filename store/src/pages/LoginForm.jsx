import { useState } from "react";
import { useLoginMutation } from "../api/api"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom"; // For redirection
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginForm] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      console.log(email,password)
      // const {data, {isError}} = await loginForm({ email, password }).unwrap();
      const {data} = await loginForm({ email, password });
      // console.log(result)
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/allproducts"); // Adjust the path as necessary
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Error handling logic here
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Log In
          </Button>
        </Form>
        {/* {isError && (
          <Alert variant="danger" className="mt-3">
            Login failed. Please check your credentials.
          </Alert>
        )} */}
      </div>
    </Container>
  );
};

export default Login;