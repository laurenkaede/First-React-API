import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/Users";


class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount = async () => {
    console.log("Inside componentDidMount");
    this.setState({
      loading: true
    });

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data);

    this.setState({
      users: response.data,
      loading: false
    });
  };

  render() {
    console.log("Inside render funtion");

    const allUsers = this.state.users.map(user => {
      return <h1 key={user.id}>{user.name}</h1>;
    });

    return (
      <div>
        <Users loading={this.state.loading} data={allUsers} />
      </div>
    )
  }
};

export default App;
