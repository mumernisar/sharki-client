import React from "react";
import SignAction from "../components/SignAction";
const Login = () => {
  return (
    <div className="form-body">
      <div className="website-logo">
        <a href="/">
          <div className="logo">
            <img className="logo-size" src="/assets/img/logo.png" alt="logo" />
          </div>
        </a>
      </div>
      <div className="iofrm-layout">
        <div className="img-holder">
          <div className="bg"></div>
          <div className="info-holder">
            <img src="/assets/images/graphic1.svg" alt="graphic" />
          </div>
        </div>
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Get more things done with Loggin platform.</h3>
              <p>
                Access to the most powerfull tool in the entire design and web
                industry.
              </p>
              <SignAction />

              <div className="page-links">
                <a href="/login4" className="active">
                  Login
                </a>
                <a href="/register4">Register</a>
              </div>
              <form></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
