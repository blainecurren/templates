import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./.auth.config";

const Login = () => {
  const instance = useMsal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance(loginRequest);
      console.log("Login Successful", response);
    } catch (error) {
      console.error("Login failed", error);
    } // TODO: Handle error cases, such as network errors or invalid credentials.
  };

  return (
    <div className="wrapper">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
