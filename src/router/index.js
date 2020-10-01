import React, { Component, lazy, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import UserLogin from "../views/UserLogin";
import UserRegister from "../views/UserRegister";
import Home from "../views/Home";
// const BannerList = lazy(() =>
//   import(
//     /* webpackChunkName:'banner' */ "../components/private/banner/BannerList"
//   )
// );

class IndexRoute extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            {/* <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
              isLoggedIn={this.props._auth && this.props._auth.isLoggedIn}
            /> */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <UserLogin />
            </Route>
            <Route path="/register" exact>
              <UserRegister />
            </Route>

            {this.props._auth && this.props._auth.isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : null}
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapStateToProps = ({ loginReducer }) => {
  return {
    _auth: loginReducer,
  };
};

export default withRouter(connect(mapStateToProps, {})(IndexRoute));
