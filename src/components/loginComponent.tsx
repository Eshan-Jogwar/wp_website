import React from "react";
import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="wrapper-container">
        <div className="container-signin">
        <h2 className="heading-signin">Sign In</h2>
        <form>
            <input type="text" placeholder="Username" required className="input-signin" />
            <input type="password" placeholder="Password" required className="input-signin" />
            <input type="submit" value="Sign In" className="button-signin" />
        </form>
        <div className="footer-signin">
            <p>
                Don't have an account? <a href="#">Sign Up</a>
            </p>
        </div>
        </div>
    </div>
  );
}
