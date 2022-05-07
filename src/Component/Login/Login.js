import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //signIn with email and password
    signInWithEmailAndPassword(email, password);
    const getData = async () => {
      const { data } = await axios.post(
        "https://vast-reaches-25407.herokuapp.com/login",
        { email }
      );
      // console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
    };
    getData();
  };

  //reset password link
  const resetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast(error.message.slice(15, 40));
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    for="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <br />
                <div className="d-grid">
                  <button
                    onClick={handleRegister}
                    className="btn btn-facebook btn-login text-uppercase fw-bold"
                  >
                    Register Now
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <p className="mt-2">Have you forget your password?</p>
                  <button onClick={resetPassword} className="btn btn-danger">
                    Forget Password?
                  </button>
                </div>
                <hr className="my-4" />
                <SocialLogin />
              </form>
              <hr />

              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
