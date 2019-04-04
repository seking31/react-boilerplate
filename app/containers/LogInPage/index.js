import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <form>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
        Enter Your Username:{' '}
        <input
          onChange={(event, newValue) => this.setState({ username: newValue })}
          type="text"
          name="FirstName"
        />
        Enter Your Password:{' '}
        <input
          type="text"
          name="LastName"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <input
          type="submit"
          value="Submit"
          onClick={event => this.handleClick(event)}
        />
      </form>
    );
  }
}

export default Login;
