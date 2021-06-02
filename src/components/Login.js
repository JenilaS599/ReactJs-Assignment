import React, { Component } from "react";
import "./login.css";
import { Link, Route, Router, Switch, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Users from '../pages/Users'

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        islogged: false,
        loginParams: {
          user_id: "",
          user_password: ""
        }
      };
    }
    handleFormChange = event => {
      let loginParamsNew = { ...this.state.loginParams };
      let val = event.target.value;
      loginParamsNew[event.target.name] = val;
      this.setState({
          loginParams: loginParamsNew
        });
      };
     
      login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin" && user_password === "12345") {
           localStorage.setItem("token", "T");
          this.setState({
            islogged: true
          });
        }
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
                  type="text"
                  name="user_id"
                  onChange={this.handleFormChange}
                  placeholder="Enter Username"
                /><br/><br/>
                <input
                  type="password"
                  name="user_password"
                  onChange={this.handleFormChange}
                  placeholder="Enter Password"
                /><br/><br/>
                <button type="submit">
                  <Link to="/users">
                    Login
                  </Link>
                </button>
                </div>
            </div>
            <p>user_id === "admin" && user_password === "12345"</p>
          </form>
        </div>
      );
    }
  }
  export default Login;