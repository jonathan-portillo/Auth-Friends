import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

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
  render() {
    return (
      <div>
        <h1>Friends!!</h1>
        {this.state.friends.map((data) => (
          <>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.email}</p>
          </>
        ))}
      </div>
    );
  }
}

export default Friends;
