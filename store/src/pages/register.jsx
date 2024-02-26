import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../api/api';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Registration() {
    const navigate = useNavigate();
    const [register] = useRegisterMutation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(formData);
        navigate('/');
    };

    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Card style={{ width: '100%', maxWidth: '500px', margin: 'auto', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }}>
                <Card.Body style={{ padding: '2rem' }}>
                    <h1 style={{ textAlign: "center", marginBottom: "24px", color: "#007bff" }}>Registration Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                required
                                style={{ borderColor: "#ced4da" }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasiclastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                required
                                style={{ borderColor: "#ced4da" }}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                                style={{ borderColor: "#ced4da" }}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                                style={{ borderColor: "#ced4da" }}
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" style={{ width: "100%", padding: "10px 0", fontSize: "16px" }}>
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registration;