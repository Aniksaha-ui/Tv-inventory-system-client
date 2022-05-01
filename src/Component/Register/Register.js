import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import Loading from "../Shared/Loading/Loading";

const Register = () => {
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  //navigation
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  //navigation end

  // register
  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  //register end

  if (user) {
    console.log(user);
    navigate("/");
  }

  if (error) {
    alert(error);
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
              <h1 className="card-title text-center mb-5 fw-light fs-5">
                Register
              </h1>
              <form onSubmit={handleRegister}>
                <div className="form-floating mb-3">
                  <input
                    ref={userNameRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                  />
                  <label for="floatingInput">Enter User Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Enter Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Enter Password</label>
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
                    Register
                  </button>
                </div>
                <br />
                <div className="d-grid">
                  <button
                    onClick={handleLogin}
                    className="btn btn-facebook btn-login text-uppercase fw-bold"
                  >
                    Login
                  </button>
                </div>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
