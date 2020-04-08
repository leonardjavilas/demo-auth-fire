import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);
  return (
    <section className="hero hero--scotch hero--scotch gradient--sunset" onSubmit={handleSignUp}>
      <form className="form-signin form-login">
        <div className="form-login__box">
          <div className="form-login__box--info mb-3 mt-3">
            <div className="circle-image">
              <i className="icon-pencil icons icon"></i>
            </div>
            <h2 className=" mb-2 mt-2 text-capitalize text-center">Sign Up</h2>
          </div>
          <div className="form-login__box--form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-label-group">
                    <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email" required />
                    <label for="inputEmail">E-mail</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-label-group">
                    <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-lg btn-primary btn-block mb-2 text-capitalize" type="submit">login in</button>
                </div>
                <div className="col-lg-12">
                  <div className="mt-3 mb-3">
                    <center>
                      <span>By creating an account, you agree to our&nbsp<a href="">terms</a></span>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-login__item">Already a member?&nbsp<a href="index.html" className="text-capitalize">login here</a></div>
      </form>
    </section >
  );
};

export default withRouter(SignUp);
