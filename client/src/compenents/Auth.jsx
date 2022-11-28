import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import Sign from "../assets";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);

  return (
    <div className="auth__from-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
