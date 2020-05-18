import React from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username:"",
      password:""
    },
    isFetching: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    })

    axiosWithAuth()
    .post("/login", this.state.credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/colors");
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  render() {
      return (
        <div>
          <h1>Welcome to the Bubble App!</h1>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button>Log In</button>
          </form>
        </div>
      )
  }
};

export default Login;
