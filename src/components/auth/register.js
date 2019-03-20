import { Link } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "../../App.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      country: "",
      city: "",
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      country: this.state.country,
      city: this.state.city
    };
    this.props.registeruser(newUser, this.props.history);
  }
  render() {
    const errors = this.state.errors;
    return (
      <div className="landing">
        <div className="register bodyCenter">
          <div className="container NoPaddingAndMargin">
            <div className="row NoPaddingAndMargin">
              <div className="col-md-10 m-auto NoPaddingAndMargin">
                <h3 className="display-6 text-center mt-3">Sign Up</h3>
                <p className="lead text-center">Create your DSWA account</p>
                <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="First Name"
                    name="first_name"
                    type="text"
                    value={this.state.first_name}
                    onChange={this.onChange}
                    error={errors.first_name}
                  />
                  <TextFieldGroup
                    placeholder="Last Name"
                    name="last_name"
                    type="text"
                    value={this.state.last_name}
                    onChange={this.onChange}
                    error={errors.last_name}
                  />
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Country"
                    name="country"
                    type="text"
                    value={this.state.country}
                    onChange={this.onChange}
                    error={errors.country}
                  />
                  <TextFieldGroup
                    placeholder="City"
                    name="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.onChange}
                    error={errors.city}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-2"
                  />
                </form>
                <p className="mt-2 text-right">
                  Already have an account? -
                  <Link
                    className=""
                    to="/login"
                    style={{ float: "right", marginLeft: "5px" }}
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
