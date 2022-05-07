import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  if (loading) {
    <Loading />;
  }

  if (user) {
    navigate("/");
  }

  return (
    <>
      <div className="d-grid mb-2">
        <button
          onClick={handleGoogleLogin}
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
          <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
