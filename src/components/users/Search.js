import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
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
      {showClear && (
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
Search.propTypes = {
  showClear: PropTypes.bool.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
