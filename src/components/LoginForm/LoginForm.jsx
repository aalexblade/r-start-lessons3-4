import { Component } from 'react';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="w-25" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="from-lable">
            <p>Email address</p>
            <input
              type="text"
              className="form-color"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="from-lable">
            <p>Password</p>
            <input
              type="text"
              className="form-color"
              value={password}
              onChange={this.handleChangePassword}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
