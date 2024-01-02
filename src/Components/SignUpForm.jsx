import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function SignUpForm({ onCancel, handleSignUp }) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');

    return (
        <>
            <Form onSubmit={handleSignUp}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com"
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >

                    <Form.Control
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsernameValue(e.target.value)}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="mb-3"
                >

                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </FloatingLabel>
                <Button 
                className='mb-3'
                type='submit'>Sign Up</Button>
                <Button
                className="mb-3"
                onClick={onCancel}>Cancel</Button>
            </Form>
        </>
    )
}