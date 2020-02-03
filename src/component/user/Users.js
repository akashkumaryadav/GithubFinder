import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
// import PropTypes from "prop-types";

const Users = ({ loading, users }) => {
  if (loading) {
    return (
      <div className="container" style={{ marginTop: "20 %" }}>
        <Spinner />;
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

// User.propTypes = {
//   Users: PropTypes.array.isRequired,
//   loding: PropTypes.bool.isRequired
// };

export default Users;
