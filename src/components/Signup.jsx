import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import eyeOpen from "../assets/eye-open.png";
import eyeClose from "../assets/eye-close.png";

function Signup() {
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
      <h2>Signup</h2>
      <span>Register and get 5% bonus!</span>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <div>
          <input ref={inputPassword} type="password" placeholder="Password" />
          {showPassword ? (
            <img onClick={handleShowPassword} src={eyeOpen} />
          ) : (
            <img onClick={handleShowPassword} src={eyeClose} />
          )}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
