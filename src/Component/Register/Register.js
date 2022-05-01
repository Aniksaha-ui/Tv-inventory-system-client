import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
    navigate("/");
  }

  return (
    <div class="container">
      <div class="row mt-3">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h1 class="card-title text-center mb-5 fw-light fs-5">
                Register
              </h1>
              <form onSubmit={handleRegister}>
                <div class="form-floating mb-3">
                  <input
                    ref={userNameRef}
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter User Name"
                  />
                  <label for="floatingInput">Enter User Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    ref={emailRef}
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Enter Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    ref={passwordRef}
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Enter Password</label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <br />
                <div class="d-grid">
                  <button
                    onClick={handleLogin}
                    class="btn btn-facebook btn-login text-uppercase fw-bold"
                  >
                    Login
                  </button>
                </div>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
