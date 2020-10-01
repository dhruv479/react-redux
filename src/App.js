import React from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import "./App.css";

import IndexRoute from "./router";

function App() {
  return (
    <div>
      <IndexRoute />
    </div>
  );
}

// const mapStateToProps = ({ loginReducer }) => {
//   return {
//     _auth: loginReducer,
//   };
// };

// export default withRouter(connect(mapStateToProps)(Landing));
export default App;
