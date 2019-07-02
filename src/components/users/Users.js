import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={styles}>
        {users.map(user => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    );
  }
};
const styles = {
  marginTop: "15px",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gridGap: "10px"
};
PropTypes.Users = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
