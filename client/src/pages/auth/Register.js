import React, { useState } from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import { Button, Input, Tooltip } from "antd";

import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../firbase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [email, setEmail] = useState("");

  const hanleRegisteration = async (e) => {
    e.preventDefault();
    // const auth = getAuth();
    const config = {
      // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };
    sendSignInLinkToEmail(auth, email, config)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });

    // await sendSignInLinkToEmail(auth, email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    //save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
    // console.log(email);
  };

  const RegisterForm = () => (
    <div className="container mt-5 p-5">
      <form onSubmit={hanleRegisteration}>
        <Input
          type="email"
          value={email}
          className="form-control"
          autoSize={true}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="Enter your Email Address"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="you will recieve verification link via your email">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        {/* <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        /> */}
        <Button type="submit" className="btn btn-raised">
          Register
        </Button>
      </form>
    </div>
  );

  return (
    <div
      className="container p-5 border-5 "
      style={{
        // backgroundColor: "green",
        textAlign: "center",
        marginTop: "6rem",
      }}
    >
      <div className="row">
        <div
          className="col-md-6 offset-md-3"
          style={{
            width: "400px",
            // backgroundColor: "blue",
            textAlign: "center",
          }}
        >
          <h4>Register</h4>
          <ToastContainer />
          {RegisterForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
