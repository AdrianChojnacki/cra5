import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null,
  };

  render() {
    const users = this.state.users;

    return (
      <div className="app">
        <ButtonFetchUsers />
        {users ? <UsersList /> : users}
      </div>
    );
  }
}

export default App;
