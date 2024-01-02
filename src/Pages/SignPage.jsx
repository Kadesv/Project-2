import SignUpForm from "../Components/SignUpForm.jsx";
import SignInForm from "../Components/SignInForm.jsx";
import BaseForm from "../Components/BaseForm.jsx";
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
    return (
        <div>
            {signIn && !signUp && <SignInForm onCancel={() => onCancel()} />}
            {!signIn && signUp && <SignUpForm onCancel={() => onCancel()} />}
            {!signIn && !signUp && <BaseForm onSignIn={() => onSignIn()} onSignUp={() => onSignUp()} />}

        </div>
    )
}