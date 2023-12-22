export default function BaseForm({onSignIn, onSignUp}) {
    return (<>

            <h1>Welcome!</h1>

        <form>
            <button onClick={onSignIn}>Sign In</button>
            <button onClick={onSignUp}>Sign Up</button>
        </form>
    </>
    )
}