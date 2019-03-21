import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "../../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }
  render() {
    const errors = this.state.errors;

    return (
      <div className="landing">
        <div className="container col-md-9 bodyRight">
          <h1 className="display-3 mb-4">Data Science With Ali Courses</h1>
          <p className="lead">
            {" "}
            Courses, share posts and get help from other developers
          </p>
        </div>
        <div className="login col-md-3 bodyRightDiv">
          <div className="container">
            <div className="row bodyRow">
              <div className="col-md-12 m-auto">
                <p className="lead NoPaddingAndMargin">Log In</p>
                <form action="dashboard.html" onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
                <div className="btn-group mt-3 btnLinkedWidth" role="group">
                  <Link to="/linkedin" className="btn btnLinkedColor">
                    <div className="floatLeft">
                      <i className="fab fa-linkedin-in mr-1" /> |{" "}
                    </div>
                    Login with LinkedIn
                  </Link>
                </div>
                <div className="mt-3 floatright">
                  <p>
                    <Link className="" to="/forgot-password">
                      Forgot Password
                    </Link>
                  </p>
                </div>
                <div className="floatright">
                  <p className="NoPaddingAndMargin">
                    Need an Account?
                    <Link
                      className=""
                      to="/register"
                      style={{ marginLeft: "5px" }}
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
