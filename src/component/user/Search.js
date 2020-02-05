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
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <form className="form" onSubmit={this.onSubmit}>
              <div>
                <input
                  className="form-control mb-2"
                  type="text"
                  name="text"
                  placeholder="Search for user"
                  value={this.state.text}
                  onChange={this.onChange}
                ></input>
                <div>
                  <button
                    className="form-control btn btn-outline-primary"
                    type="Submit"
                    value="Search"
                  >
                    Submit
                  </button>
                  {this.props.showClear && (
                    <button
                      type="Submit"
                      value="clear"
                      className="form-control btn btn-outline-danger  btn-block mt-2"
                      onClick={this.props.clearUsers}
                    >
                      clear page
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
