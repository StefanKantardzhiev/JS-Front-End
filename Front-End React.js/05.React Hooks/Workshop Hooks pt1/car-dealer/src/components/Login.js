import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import { useForm } from "../hooks/useForm"
export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        username: String,
        email: String,
        password: String,
    }, onLoginSubmit);

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Gosheto" value={values.username} onChange={changeHandler} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email} onChange={changeHandler} />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={changeHandler} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}