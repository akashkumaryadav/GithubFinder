//utils to be used
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Alert from "./component/layout/Alert";
import Users from "./component/user/Users";
import { User } from "./component/user/User";
import Search from "./component/user/Search";
import About from "./component/pages/About";
import axios from "axios";
//global css
// import "./App.css";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

//class based react component extendsing Component for core react component
class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
    gists: []
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    // console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&&client_secret=${githubClientSecret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&&client_secret=${githubClientSecret}`
    );
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&&client_secret=${githubClientSecret}`
    );
    this.setState({ repos: res.data });
  };

  getUserGists = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data });
  };

  clearUsers = e => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    // this.setState({ loading: false });
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null, loading: false }), 500);
  };
  //class method to return the view
  render() {
    // const name = "udaky";
    //arrow function
    // const foo = () => 'Bars'
    //equivallent js code for the respective jsx to create a div with h1 containing a text
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello from react js'));
    const { loading, users, user, alert, repos, gists } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  getUserGists={this.getUserGists}
                  user={user}
                  repos={repos}
                  gists={gists}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
//exporting the App component finally
export default App;
