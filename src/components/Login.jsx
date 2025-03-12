import React, { useRef, useEffect, useState } from "react";
import "./Form.css";
import eyeOpen from "../assets/eye-open.png";
import eyeClose from "../assets/eye-close.png";

function Login() {
  const inputPassword = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (inputPassword.current) {
      inputPassword.current.type = showPassword ? "text" : "password";
    }
  }, [showPassword]);

  return (
    <div className="form">
      <h2>Login</h2>
      <span>Welcome back!</span>
      <form>
        <input type="text" placeholder="Username" />
        <div>
          <input ref={inputPassword} type="password" placeholder="Password" />
          {showPassword ? (
            <img onClick={handleShowPassword} src={eyeOpen} />
          ) : (
            <img onClick={handleShowPassword} src={eyeClose} />
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
