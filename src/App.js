import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import User from "./components/users/User";
import GithubState from "./contexts/github/githubState";
import AlertState from "./contexts/alert/alertState";

const App = () => {
  return (
    <>
      <GithubState>
        <AlertState>
          <Router>
            <Navbar />
            <div
              className="container mt-3 mx-auto"
              style={{ maxWidth: "500px" }}
            >
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <>
                      <Search />
                      <Users />
                    </>
                  )}
                />
                <Route path="/about" component={About} />
                <Route path="/users/:login" component={User} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    </>
  );
};

export default App;
