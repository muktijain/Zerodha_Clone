import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const baseURL = "http://localhost:3002";
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    mobile: "",
    password: "",
    username: "",
  });
  const { mobile, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "right-top",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "right-top",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${baseURL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess("User created successfully");
        setTimeout(() => {
          window.location.href = "http://localhost:3001/holdings";
        }, 1000);
      } else {
        handleError("Enter valid credentials");
        console.log("Signup failed:", message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      mobile: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className=" d-flex flex-column  mt-5">
        <div className="row mt-5 mb-3 text-center">
          <h1 className="fs-4 fw-bold">
            Open a free demat and trading account online
          </h1>
          <h2 className="text-muted mt-2 mb-5 fs-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h2>
        </div>
        <div className="row mb-5 mt-5 p-4">
          <div className="col img-fluid">
            <img src="./media/images/account_open.svg" alt="account opening" />
          </div>
          <div className="col ">
            <h2 className="mb-2 fs-4">Signup now</h2>
            <h4 className="text-muted fs-6">Or track your existing application</h4>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  value={mobile}
                  required
                  maxLength={10}
                  minLength={10}
                  onChange={handleOnChange}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  id="exampleInputUsername"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  required
                  onChange={handleOnChange}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  name="password"
                  required
                  value={password}
                  onChange={handleOnChange}
                />
              </div>
              <button style={{ width: "50%", margin: "0 auto" }} className='btn btn-primary mt-3'> Sign up</button>
            </form>
            <p className="text-muted small mt-3 mb-3">
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
            <hr/>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
