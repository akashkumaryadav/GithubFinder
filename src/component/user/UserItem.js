import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //   //adding state using constructor
  //   state = {
  //     id: "id",
  //     login: "mojambo",
  //     avator_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo"
  //   };
  //   destructring the object
  //   const { login, avatar_url, html_url } = props.user;
  return (
    <React.Fragment>
      <div className="col-lg-4 mb-2 mt-2">
        <div className="card shadow-lg">
          <img src={avatar_url} className="card-img-top " alt={login} />
          <div
            className="card-body"
            style={{ background: "rgba(10,10,20,10,0.2)" }}
          >
            <Link to={`user/${login}`} className="card-title">
              <h5 className="text-center">{login}</h5>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
