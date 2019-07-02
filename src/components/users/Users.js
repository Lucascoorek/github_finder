import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../contexts/github/githubContext";

const Users = () => {
  const { users, loading } = useContext(GithubContext);
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

export default Users;
