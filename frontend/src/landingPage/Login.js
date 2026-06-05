import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../enviornment";
const Login = () => {
  // const baseURL = "http://localhost:3002";
  const dasboardUrl = "https://kite-0dha.netlify.app"

  const navigation = useNavigate();
  const [inputValues, setInputValues] = useState({
    mobile: "",
    password: "",
  });
  const [mobile, password] = [inputValues.mobile, inputValues.password];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleError = (err) => {
    console.log("ERROR TOAST:", err);
    toast.error(err, {
      position: "right-top",
    });
  };

  const handleSuccess = (msg) => {
    console.log("SUCCESS TOAST:", msg);
    toast.success(msg, {
      position: "right-top ",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BASE_URL}/login`,
        {
          ...inputValues,
        },
        {
          withCredentials: true
        },
        
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess("login successful");
        setTimeout(() => {
          window.location.href = `${dasboardUrl}/holdings?token=${data.token}`;
        }, 1000);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", data.token);
      } else {
        handleError("Enter valid credentials");
      }
    } catch (error) {
      handleError(
        error.response?.data?.message ||
          error.message ||
          "Enter valid credentials",
      );
    }
    setInputValues({
      mobile: "",
      password: "",
    });
  };
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className=" d-flex flex-column align-items-center mt-5">
        <div className="card p-4 shadow-sm" style={{ width: "450px" }}>
          <img
            className="mx-auto d-block mt-4 mb-2"
            src="./media/images/logoKite.png"
            alt="kite"
            style={{ width: "80px" }}
          />

          <h4 className="mt-4 mb-4 text-center fw-normal">Login to Kite</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 p-2">
              <input
                type="number"
                className="form-control"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                maxLength={10}
                minLength={10}
                required
                onChange={handleOnChange}
              />
            </div>

            <div className="mb-3 p-2">
              <input
                type="password"
                className="form-control "
                name="password"
                placeholder="Password"
                value={password}
                required
                onChange={handleOnChange}
              />
            </div>

            <button type="submit" className="btn login-btn w-100 p-2">
              Login
            </button>

            <p className="mt-3 text-center">
              <Link
                to="/forgot-password"
                style={{ textDecoration: "none", color: "rgb(150, 140, 138)" }}
              >
                Forgot mobile or password?
              </Link>
            </p>
          </form>
        </div>
        <div className="mt-4 text-center" style={{ color: "rgb(150, 140, 138)" }}>
          <Link  to="/">
            <img
              src="./media/images/logo.svg"
              alt="logo"
              style={{ width: "15%" }}
            />
          </Link>
            <br/><br/>
          <Link  to="/signup" className="ms-2" style={{ textDecoration: "none", color: "rgb(150, 140, 138)" }}>
            Do not have account? Sign up for free !
          </Link>
          <br/><br/>
          <p>
            Zerodha Broking Limited: Member of NSE, BSE, MCX ‐ SEBI Reg. <br />
            no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | <br />
            Smart Online Dispute Resolution | SEBI SCORES
          </p>
          <p>v3.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
