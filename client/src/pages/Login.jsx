import { use, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="you@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button label="Login" />
            </form>
        </div>
    )
}

export default Login