import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hide = this.hide.bind(this);
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  hide(e) {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({ visible: false });
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-0">
          <button
            className="bg-dark"
            onClick={this.toggleMenu}
            type="button"
            style={{ border: "1px solid #343a40" }}
          >
            <span className="navbar-toggler-icon " style={{}} />
          </button>

          <div className="container">
            <Link className="navbar-brand" to="/">
              Data Science With Ali
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">
                    {" "}
                    Browse Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">
                    {" "}
                    Membership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">
                    {" "}
                    About Us
                  </Link>
                </li>
                {isAuthenticated ? authLinks : guestLinks}
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.state.visible && (
            <div
              className="bg-dark"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                position: "absolute",
                overflow: "hidden",
                height: "100%",
                zIndex: "1",
                transition: "0.5s",
                top: "0",
                opacity: "0.9",
                tabIndex: "0",
                width: "15%"
              }}
              onBlur={this.hide}
            >
              <button
                className="navbar-toggler navbar-dark "
                onClick={this.toggleMenu}
                type="button"
                style={{ padding: "0px", margin: "15px", marginLeft: "22px" }}
              >
                <span
                  className="navbar-toggler-icon "
                  style={{
                    fontSize: "17px"
                  }}
                />
              </button>

              <div className="bg-dark" style={{ marginTop: "0px" }}>
                <Link
                  to="/change-password"
                  onClick={this.toggleMenu}
                  className="btn btn-light col-md-12"
                  style={{
                    marginTop: "10px",
                    color: "white",
                    border: "1px solid #343a40",
                    backgroundColor: "#343a40",
                    textAlign: "left"
                  }}
                >
                  Change Password
                </Link>
              </div>
              <div style={{ marginTop: "0px" }}>
                <Link
                  to="/dashBoard"
                  onClick={this.toggleMenu}
                  className="btn btn-light col-md-12"
                  style={{
                    marginTop: "10px",
                    color: "white",
                    border: "1px solid #343a40",
                    backgroundColor: "#343a40",
                    textAlign: "left"
                  }}
                >
                  DashBoard
                </Link>
              </div>
              <div style={{ marginTop: "0px" }}>
                <Link
                  to="/dashBoard"
                  // onClick={this.toggleMenu}
                  onClick={this.onLogoutClick.bind(this)}
                  className="btn btn-light col-md-12"
                  style={{
                    marginTop: "10px",
                    color: "white",
                    border: "1px solid #343a40",
                    backgroundColor: "#343a40",
                    textAlign: "left"
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
