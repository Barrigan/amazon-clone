import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth)
                    history.push("/");
            })
            .catch(error => alert(error.message));
        // Some fancy firebase is happening
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log("Autentication message: ", auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message));
        // Some fancy firebase is happening
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://www.bachataspice.com/extra-barrigan/amazon-challenge/amazon-logo-black-font.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to <strong>Amazon's Fake Clone</strong> Conditions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button type="submit" onClick={register}
                    className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div >
    )
}

export default Login
