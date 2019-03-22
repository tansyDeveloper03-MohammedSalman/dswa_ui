import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgotPassowrd } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "../../App.css";

class ForgotPassword extends Component {
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

    this.props.forgotPassowrd(userData, this.props.history);
  }
  render() {
    const errors = this.state.errors;
    console.log(this.state);
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
                <p className="lead NoPaddingAndMargin">Forgor Password</p>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <div
                    className="mt-0 text-right"
                    style={{
                      color: "red",
                      fontSize: "13px"
                    }}
                  >
                    {errors.msg}
                  </div>

                  <input
                    type="submit"
                    value="Recover Password"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>

                <div className="floatright mt-3">
                  <p
                    className="NoPaddingAndMargin"
                    style={{ fontSize: "13px" }}
                  >
                    Need an Account?
                    <Link
                      className=""
                      to="/register"
                      style={{ marginLeft: "5px" }}
                    >
                      Register Here
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

ForgotPassword.propTypes = {
  forgotPassowrd: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { forgotPassowrd }
)(ForgotPassword);
