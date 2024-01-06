import SignUpForm from "../Components/SignUpForm.jsx";
import SignInForm from "../Components/SignInForm.jsx";
import BaseForm from "../Components/BaseForm.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

export default function SignPage() {

    const navigate = useNavigate();
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [show, setShow] = useState(false);
    const onCancel = () => {
        setSignIn(false);
        setSignUp(false);
    };
    const onSignIn = () => {
        setSignIn(true);
    };
    const onSignUp = () => {
        setSignUp(true);
    }


    const handleSignIn = async (event, formData) => {
        event.preventDefault();

        const res = await axios.post('/api/auth', formData);

        if (res.data.success) {
            navigate('/');
        }
    };

    const handleSignUp = async (event, formData) => {
        event.preventDefault();

        const res = await axios.post('/api/register', formData);

        if (res.data.success) {
            navigate('/');
        } else {
            setShow(true)


        }
    };



    return (
        show ?
            <>
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        oh
                    </p>
                </Alert>
                {signIn && !signUp && <SignInForm onCancel={() => onCancel()} handleSignIn={handleSignIn} />}
                {!signIn && signUp && <SignUpForm onCancel={() => onCancel()} handleSignUp={handleSignUp} />}
                {!signIn && !signUp && <BaseForm onSignIn={() => onSignIn()} onSignUp={() => onSignUp()} />}
            </> :
            <div>
                {signIn && !signUp && <SignInForm onCancel={() => onCancel()} handleSignIn={handleSignIn} />}
                {!signIn && signUp && <SignUpForm onCancel={() => onCancel()} handleSignUp={handleSignUp} />}
                {!signIn && !signUp && <BaseForm onSignIn={() => onSignIn()} onSignUp={() => onSignUp()} />}

            </div>
    )
}