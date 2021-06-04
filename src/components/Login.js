import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      user_id: "",
      user_password: "",
    };
  }
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  handleFormChange = (event) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };
  login = (event) => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "12345") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true,
      });
    }
    console.log(user_id, user_password);
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 ">Login form</h1>
          <div className="row">
            <div className="col">
              <input
                id="uid"
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <br />
              <br />
              <input
                type="password"
                name="user_password"
                value={this.state.user_password}
                onChange={(e) => {
                  this.setState({
                    user_password: e.target.value,
                  });
                }}
                placeholder="Enter Password"
              />
              <br />
              <div id="password-meter">
                <PasswordStrengthMeter password={this.state.user_password} />
              </div>
              <br />
              <button type="submit">
                <Link to="/users">Login</Link>
              </button>
            </div>
            <br></br>
            <h4>OR</h4>
            <br />
            <em>
              <h3>Login with google</h3>
            </em>
            <br />
            <GoogleLogin
              clientId="1085552609950-bt5e5krlu8gamo9mrbs9efrfoj0ophs5.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            >
              <Link to="/users">
                <label>Login with Google</label>
              </Link>
            </GoogleLogin>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
