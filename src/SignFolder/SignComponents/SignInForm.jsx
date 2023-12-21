
export default function SignInForm({ onCancel, handleSignIn }) {

    return (
        <>
            <form onSubmit={handleSignIn}>
                <input placeholder="name@example.com" type="email" id="floatingInput" class="form-control" />
                <label for="floatingInput">Email address</label>
                <input placeholder="Password" type="password" id="floatingPassword" class="form-control" />
                <label for="floatingPassword">Password</label>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button onClick={onCancel}>Cancel</button>
        </>
    )
}

