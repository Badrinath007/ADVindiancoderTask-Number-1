import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../fbase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <p> Or </p>
            <div>
                <form>
                    <label>Create Account</label><br />
                    <label htmlFor="email">Email</label><br />
                    <input type='text' name='email' />
                    <br />
                    <label htmlFor="password">Password</label><br />
                    <input type='password' name='password' /><br />

                    <Link to='/'>
                        <button >Login</button>
                    </Link>

                </form>
            </div>
        </div>

    );
}

export default Login;