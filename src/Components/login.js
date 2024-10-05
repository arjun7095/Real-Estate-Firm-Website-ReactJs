import React, { useState } from "react";
import './login.css';
import Footer from "./footer";

function Login() {
  const [signIn, toggle] = useState(true);
  return (<>
    <div align="center" className="body">
      <div className="Container">
        <div
          className="SignUpContainer"
          style={{
            transform: signIn !== true ? "translateX(100%)" : null,
            opacity: signIn !== true ? 1 : null,
            zIndex: signIn !== true ? 5 : null
          }}
        >
          <form className="Form">
            <h1 className="Title">Create Account</h1>
            <input type="text" className="Input" placeholder="Name" />
            <input type="email" className="Input" placeholder="Email" />
            <input type="password" className="Input" placeholder="Password" />
            <button className="Button">Sign Up</button>
          </form>
        </div>

        <div
          className="SignInContainer"
          style={{
            transform: signIn !== true ? "translateX(100%)" : null
          }}
        >
          <form className="Form">
            <h1 className="Title">Sign in</h1>
            <input type="email" className="Input" placeholder="Email" />
            <input type="password" className="Input" placeholder="Password" />
            <button className="Button">Sign in</button>
          </form>
        </div>

        <div
          className="OverlayContainer"
          style={{
            transform: signIn !== true ? "translateX(-100%)" : null
          }}
        >
          <div
            className="Overlay"
            style={{
              transform: signIn !== true ? "translateX(50%)" : null
            }}
          >
            <div
              className="LeftOverlayPanel"
              style={{
                transform: signIn !== true ? "translateX(0)" : null
              }}
            >
              <h1 className="Title">Welcome Back!</h1>
              <p className="Paragraph">
                To keep connected with us please login with your personal info
              </p>
              <button className="GhostButton" onClick={() => toggle(true)}>
                Sign In
              </button>
            </div>

            <div
              className="RightOverlayPanel"
              style={{
                transform: signIn !== true ? "translateX(20%)" : null
              }}
            >
              <h1 className="Title">Hello, Friend!</h1>
              <p className="Paragraph">
                Enter Your personal details and start journey with us
              </p>
              <button className="GhostButton" onClick={() => toggle(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
}

export default Login;
