
export default function SignUpForm({ onCancel, handleSignUp }) {
    return (
        <>
            <form onSubmit={handleSignUp}>
                <input placeholder="name@example.com" type="email" id="floatingInput" className="form-control" />
                <label for="floatingInput">Email address</label>
                <input placeholder="Password" type="password" id="floatingPassword" className="form-control" />
                <label for="floatingPassword">Password</label>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button onClick={onCancel}>Cancel</button>
        </>
    )
}