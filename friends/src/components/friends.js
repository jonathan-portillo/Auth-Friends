import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { Link } from "react-router-dom";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount = () => {
    this.data();
  };

  data = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("friends res", res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log("Error with friends", err);
      });
  };

  addFriend = (e) => {
    // e.preventDefault();
    this.props.history.push("/addfriend");
  };
  render() {
    return (
      <div>
        <h1>Friends!!</h1>
        {this.state.friends.map((data) => (
          <>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
          </>
        ))}
        <button onClick={this.addFriend}>
          Add a friend
          {/* <Link to="/addFriend">Add A Friend To The List </Link>{" "} */}
        </button>
      </div>
    );
  }
}

export default Friends;
