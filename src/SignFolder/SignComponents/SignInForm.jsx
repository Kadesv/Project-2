import {Form, Button, Container, FloatingLabel} from 'react-bootstrap';

export default function SignInForm({ onCancel, handleSignIn }) {

    return (
        <>
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Button variant='Secondary' onClick={onCancel}>Cancel</Button>

            </Container>
        </>
    )
}