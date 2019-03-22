import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetPassowrd } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "../../App.css";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      password: "",
      errors: {},
      user: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    const { id } = this.props.match.params;
    fetch(`http://localhost:3000/user/${id}/resetPassword/`).then(user => {
      this.setState(() => ({ user }));
    });
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
      id: this.props.match.params.id,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.resetPassowrd(userData);
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
                <p className="lead NoPaddingAndMargin">Reset Password</p>
                <form action="dashboard.html" onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="New Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
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
                    value="Reset Password"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>

                <div className="floatright mt-3">
                  <p className="NoPaddingAndMargin">
                    Need an Account?
                    <Link
                      className=""
                      to="/register"
                      style={{ marginLeft: "5px" }}
                    >
                      Sign Up
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

ResetPassword.propTypes = {
  resetPassowrd: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { resetPassowrd }
)(ResetPassword);
