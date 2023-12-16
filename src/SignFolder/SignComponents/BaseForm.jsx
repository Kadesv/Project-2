export default function BaseForm({onSignIn, onSignUp}) {
    return (<>
        <form>
            <h1>Welcome!</h1>
            <button onClick={onSignIn}>Sign In</button>
            <button onClick={onSignUp}>Sign Up</button>
        </form>
    </>
    )
}