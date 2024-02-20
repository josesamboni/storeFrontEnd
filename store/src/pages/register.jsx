import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../api/api';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Registration() {
    const navigate = useNavigate();
    const [register] = useRegisterMutation();
    const [formData, setFormData] = useState({
        firstName: '', // Corrected to handle first name
        lastName: '', // Added for last name
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
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Card style={{ width: '100%', maxWidth: '500px', padding: '2rem', marginTop: '2rem' }}>
                <Card.Body>
                    <h1 className="text-center mb-4">Registration Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text" // Corrected type
                                name="firstName" // Corrected attribute
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasiclastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text" // Corrected type
                                name="lastName" // Corrected attribute
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                required
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
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mb-2">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registration;