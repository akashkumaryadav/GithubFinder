import React from "react";
import PropTypes from "prop-types";

// const Search = () => {
//   return (
//     <form className="form">
//       <input type="text" name="text" placeholder="Search for user"></input>
//       <button
//         type="Submit"
//         value="{state.text}"
//         className="btn btn-dark btn-block"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

class Search extends React.Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //search for github user bby making a call to github endpoint api /search/user
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("message", "type");
    }
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search for user"
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <button
            type="Submit"
            value="Search"
            className="btn bg-primary-blue btn-block"
          >
            Submit
          </button>
        </form>
        {this.props.showClear && (
          <button
            type="Submit"
            value="Search"
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            clear page
          </button>
        )}
      </div>
    );
  }
}

export default Search;
