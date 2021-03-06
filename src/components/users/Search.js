import React, { useState, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";
import AlertContext from "../../contexts/alert/alertContext";

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      setAlert("Please enter name", "warning");
    } else {
      searchUsers(text);
    }
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-1">
        <div className="form-group">
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleChange}
            className="form-control"
            placeholder="Search users..."
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto d-block btn-sm btn-block"
        >
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-primary mx-auto d-block btn-sm btn-block disabled"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </>
  );
};

export default Search;
