import SignUpForm from "./SignComponents/SignUpForm.jsx";
import SignInForm from "./SignComponents/SignInForm.jsx";
import BaseForm from "./SignComponents/BaseForm.jsx";
import { useState } from "react";
export default function SignPage() {
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
    return(<>
        {signIn && !signUp && <SignInForm onCancel={() => onCancel()}/>}
        {!signIn && signUp && <SignUpForm  onCancel={() => onCancel()}/>}
        {!signIn && !signUp && <BaseForm onSignIn={() => onSignIn()} onSignUp={() => onSignUp()}/>}
        </>
    )
}