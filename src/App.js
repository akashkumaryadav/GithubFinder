//utils to be used
import React, { Component } from "react";
import Navbar from "./component/layout/Navbar";
import User from "./component/user/User";
import axios from "axios";
//global css
import "./App.css";

//class based react component extendsing Component for core react component
class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

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
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
//exporting the App component finally
export default App;
