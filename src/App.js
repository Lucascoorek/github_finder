import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import User from "./components/users/User";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [alert, toggleAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLINET_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLINET_SECRET}`
    );
    setLoading(false);
    setUsers(res.data.items);
  };
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLINET_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLINET_SECRET}`
    );
    setLoading(false);
    setUser(res.data);
  };
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:desc&client_id=${
        process.env.REACT_APP_GITHUB_CLINET_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLINET_SECRET}`
    );
    setLoading(false);
    setRepos(res.data);
  };
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const setAlert = (msg, type) => {
    toggleAlert({ msg, type });
    setTimeout(() => {
      toggleAlert(null);
    }, 2500);
  };
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3 mx-auto" style={{ maxWidth: "500px" }}>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users users={users} loading={loading} />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/users/:login"
              render={props => (
                <User
                  {...props}
                  repos={repos}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
