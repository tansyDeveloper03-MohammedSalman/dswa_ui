import { Link } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";
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
        <div className="register bodyCenterregister">
          <div className="container NoPaddingAndMargin">
            <div className="row NoPaddingAndMargin">
              <div className="col-md-10 m-auto NoPaddingAndMargin">
                <div className="mt-5">
                  <p className="lead text-center">
                    Create And Personalize Your DSWA Profile
                  </p>
                </div>
                <div
                  className="btn-group col-md-10 mt-3"
                  role="group"
                  style={{
                    color: "#003366",
                    width: "100%"
                  }}
                >
                  <Link
                    to="/registerWithEmail"
                    className="btn"
                    style={{
                      backgroundColor: "#22aae4",
                      color: "white"
                    }}
                  >
                    Sign Up With Email
                  </Link>
                </div>
                <div className="mt-3">
                  <p>or</p>
                </div>
                <div
                  className="btn-group col-md-10"
                  role="group"
                  style={{
                    color: "#003366",
                    width: "100%"
                  }}
                >
                  <Link
                    to="/linkedin"
                    className="btn"
                    style={{
                      backgroundColor: "#3078D7",
                      color: "white"
                    }}
                  >
                    <div style={{ float: "left" }}>
                      <i className="fab fa-linkedin-in mr-1" /> |{" "}
                    </div>
                    Sign Up with LinkedIn
                  </Link>
                </div>
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
