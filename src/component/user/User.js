import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
// import PropTypes from "prop-types";

const User = ({ loading, users }) => {
  if (loading) {
    return (
      <div className="container" style={{ marginTop: "20 %" }}>
        <Spinner />;
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1rem"
        }}
      >
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

// User.propTypes = {
//   Users: PropTypes.array.isRequired,
//   loding: PropTypes.bool.isRequired
// };

export default User;
