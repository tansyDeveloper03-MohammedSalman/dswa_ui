import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Courses");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="row col-md-12" style={{ marginTop: "25px" }}>
          <div className="col-md-10">
            <h1 className="display-5 text-light">Data Science With Ali</h1>
          </div>
          <div className="col-md-2" style={{ paddingTop: "10px" }}>
            <Link
              className="text-light"
              to="/register"
              style={{ fontSize: "20px", marginRight: "25px" }}
            >
              Sign Up
            </Link>
            <Link
              className="text-light"
              to="/login"
              style={{ fontSize: "20px" }}
            >
              Login
            </Link>
          </div>
        </div>
        <div className="landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Data Science With Ali Courses
                </h1>
                <p className="lead">
                  {" "}
                  Courses, share posts and get help from other developers
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
