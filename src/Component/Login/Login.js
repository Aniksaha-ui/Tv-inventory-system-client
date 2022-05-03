import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://powerful-temple-45584.herokuapp.com/login",
      { email }
    );
    // console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    <Loading />;
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
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-google btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-facebook btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2"></i> Sign in with
                    Facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
