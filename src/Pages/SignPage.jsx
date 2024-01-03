import SignUpForm from "../Components/SignUpForm.jsx";
import SignInForm from "../Components/SignInForm.jsx";
import BaseForm from "../Components/BaseForm.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function SignPage() {

    const navigate = useNavigate();
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

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
        navigate('/browse');
      }
    };

    // const handleSignUp = async (event, formData) => {
    //     event.preventDefault();
    
    //     const res = await axios.post('/api/auth', formData);
    
    //     if (res.data.success) {
    //       navigate('browse');
    //     }
    //   };



    return (
        <div>
            {signIn && !signUp && <SignInForm onCancel={() => onCancel()} handleSignIn={handleSignIn} />}
            {!signIn && signUp && <SignUpForm onCancel={() => onCancel()} />}
            {!signIn && !signUp && <BaseForm onSignIn={() => onSignIn()} onSignUp={() => onSignUp()} />}

        </div>
    )
}