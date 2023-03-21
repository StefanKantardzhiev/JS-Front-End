import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLoginSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}