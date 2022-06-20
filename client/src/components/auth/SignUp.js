import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"


const SignUp = () => {
    const { signup } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordconfirm] = useState("")

    const handleSubmit = (r) => {
        r.preventDefault()
        if (password.length < 6) {
            alert('Passwaor not long enough')
        }
        if (password !== passwordConfirm) {
            alert('passwords do not match')
        }
        signup({ email, password })
    }

    return (
        <>
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    required
                    autoFocus
                    value={email}
                    onChange={(r) => setEmail(r.target.value)}
                />
                <label>password</label>
                <input
                    minLength={6}
                    required
                    autoFocus
                    value={password}
                    onChange={(r) => setPassword(r.target.value)}
                />
                <label>passwordConfirm</label>
                <input
                    minLength={6}
                    required
                    autoFocus
                    value={passwordConfirm}
                    onChange={(r) => setPasswordconfirm(r.target.value)}
                />
                <button type="submit">Sign up.</button>
            </form>
        </>
    )
}
export default SignUp