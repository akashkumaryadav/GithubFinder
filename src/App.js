//utils to be used
import React, { Component } from "react";
import Navbar from "./component/layout/Navbar";
import User from "./component/user/User";
import Search from "./component/user/Search";
import axios from "axios";
//global css
import "./App.css";

//class based react component extendsing Component for core react component
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = e => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };
  //class method to return the view
  render() {
    // const name = "udaky";
    //arrow function
    // const foo = () => 'Bars'
    //equivallent js code for the respective jsx to create a div with h1 containing a text
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello from react js'));
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
//exporting the App component finally
export default App;
