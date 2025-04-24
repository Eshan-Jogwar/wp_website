import React, { useState } from "react";
import "./SignIn.css";
import { apiUrl } from "./Links";
export default function SignIn( {setRole, username, setUsername, setWebMode} ) {
  // State for storing user input and role
  const [errorMessage, setErrorMessage] = useState("");  // For error handling
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from submitting the default way

    try {
      // Send login request
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update role if login is successful
        setRole(data.user.role);
        setErrorMessage("");  // Clear any previous error messages
        setWebMode("home");
        setUsername(data.user.email);
        setPassword("");
        console.log("Role from API:", data.user.role);
      } else {
        // If there was an error, show the error message
        setErrorMessage(data.msg || "Login failed");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="wrapper-container">
      <div className="container-signin">
        <h2 className="heading-signin">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            className="input-signin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="input-signin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign In" className="button-signin" />
        </form>

        {/* Display error message if any */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}
