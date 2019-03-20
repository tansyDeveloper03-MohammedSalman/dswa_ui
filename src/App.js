import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUserLogin, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/common/PrivateRouter";
import CreateProfile from "./components/create-profile/CreateProfile";

import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/landing";
import Footer from "./components/layouts/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import RegisterWithEmail from "./components/auth/registerWithEmail";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import { clearCurrentProfile } from "./actions/profileActions";
import EditProfile from "./components/edit-profile/EditProfile";
import ChangePassword from "./components/change_password/ChangePassword";

import "./App.css";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const payloads = localStorage.payload;
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUserLogin(decoded, payloads));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current profile
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}

            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/registerWithEmail"
              component={RegisterWithEmail}
            />
            <Navbar />

            <div className="container">
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/Courses" component={EditProfile} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/change-password"
                  component={ChangePassword}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
