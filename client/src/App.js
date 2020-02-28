import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/api/login">Login</Link>
          <Link to="/api/colors">Color List</Link>
        </nav>
        <Route exact path="/api/login" component={Login} />
        <PrivateRoute exact path="/api/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
