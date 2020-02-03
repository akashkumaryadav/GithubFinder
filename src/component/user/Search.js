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
      this.props.setAlert("Please provide details", "light");
    }
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="container">
        <form className="form m-5 p-5" onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              className="form-control mb-2"
              type="text"
              name="text"
              placeholder="Search for user"
              value={this.state.text}
              onChange={this.onChange}
            ></input>
            <div className="input-group-append">
              <button
                className="form-control btn btn-primary"
                type="Submit"
                value="Search"
              >
                Submit
              </button>
              {this.props.showClear && (
                <button
                  type="Submit"
                  value="clear"
                  className="form-control btn btn-danger  btn-block"
                  onClick={this.props.clearUsers}
                >
                  clear page
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
