export default function LoginPage({onSignIn, onSignUp}) {


    return(
        <>
        <h1>Welcome To My Forums App</h1>
        <h2></h2>
        <button onClick={onSignIn}>Sign In</button>
        <button onClick={onSignUp}>Sign Up</button>
        </>
    )
}