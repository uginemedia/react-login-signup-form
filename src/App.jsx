import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSwitch = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className={`app ${showSignup ? "signup-page" : "login-page"}`}>
      <div className="form-container">
        {showSignup ? <Signup /> : <Login />}
        <div className="switch-link">
          <span onClick={handleSwitch}>
            {showSignup
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
