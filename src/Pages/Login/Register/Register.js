import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login')
    }
    if (user) {
        navigate('/home');
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        console.log(name, email, password);
    }


    return (
        <div>
            <h2>Please Register</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleRegister} className='text-start'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='text-start mt-2'>Already have an account? <span className='text-danger' onClick={navigateLogin} role="button" tabindex="0">Login Now</span> </p>
            </div>
        </div>
    );
};

export default Register;