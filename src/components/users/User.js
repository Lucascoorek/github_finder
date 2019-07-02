import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../contexts/github/githubContext";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const User = ({ match }) => {
  const { getUser, loading, user, repos, getUserRepos } = useContext(
    GithubContext
  );
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const { name, avatar_url, location, hireable, company, html_url } = user;
  if (loading) return <Spinner />;
  return (
    <>
      <div className="card mb-3 text-center">
        <h3 className="card-header ">{name}</h3>
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <h6 className="card-subtitle text-muted">
            Hireable{" "}
            {hireable ? (
              <FaCheckCircle className="text-success" />
            ) : (
              <FaTimesCircle className="text-danger" />
            )}
          </h6>
        </div>
        <img
          style={{
            height: "200px",
            borderRadius: "50%",
            display: "block",
            margin: "auto"
          }}
          src={avatar_url}
          alt="Avatar"
        />
        <div className="card-body">
          {company ? <p className="card-text">{company}</p> : null}
        </div>

        <div className="card-body">
          <a href={html_url} className="btn btn-outline-primary btn-sm">
            Visit Github Profile
          </a>
        </div>
        <div className="card-footer text-muted">
          <Link to="/" className="btn btn-outline-primary btn-sm">
            Go Back
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">Latest repositories</h4>
          <ul className="list-group list-group-flush">
            <Repos repos={repos} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default User;
