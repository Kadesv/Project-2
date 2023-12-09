export default function LoginForm({}) {
    return (
        <>  
            <h1>Sign In here</h1>
            <form>
                <input placeholder="Email/ Username"
                type="text"/>
                <input placeholder="Password" type="password"/>
                <button>Log in</button>
            </form>
        </>
    )
}