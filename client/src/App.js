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
        <Route path="/api/login" component={Login} />
        <PrivateRoute exact path="/api/colors" component={BubblePage} />
        <nav>
          <Link to="/api/login">Login</Link>
          <Link to="/api/colors">Colors</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
