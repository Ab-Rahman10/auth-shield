import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmitLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            {success && <p className="text-green-600">Login Successful!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
