import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url, html_url }) => {
  return (
    <div
      className="card text-white border-primary mb-3 shadow"
      style={{ maxWidth: "15rem" }}
    >
      <div className="card-body text-center">
        <img
          className="rounded-circle mx-auto"
          src={avatar_url}
          alt="Avatar"
          style={{ width: "50%", display: "block" }}
        />
        <h5 className="card-title mt-2">{login}</h5>
        <Link
          to={`users/${login}`}
          className="btn btn-outline-primary btn-sm mt-3"
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
