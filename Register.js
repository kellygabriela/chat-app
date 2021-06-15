import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthProvider';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { register } = useAuth();
    let history = useHistory();
    const redirect= () => {
    history.push('/login')
}
    function handleSubmit(e) {
        e.preventDefault();

        register(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder = "your email" ref={emailRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder = "your password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" className="me-2" variant="light">Register</Button>
                    <Button onClick = {redirect} variant="dark">Back to Login</Button>
                </Form.Group>
                

            </Form>
        </Container >
    );
}
