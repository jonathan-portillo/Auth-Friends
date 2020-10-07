import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (data) => {
    axiosWithAuth()
      .post("/friends", data)
      .then((res) => {
        console.log("new friend,", data);
        setNewFriend({
          ...newFriend,
          data,
        });
      });
  };

  const submit = (e) => {
    e.preventDefault();
    addNewFriend(newFriend);
    history.push("/friends");
  };

  return (
    <>
      <h1>Add a Friend</h1>
      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="name"
          type="text"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          age="age"
          name="age"
          placeholder="age"
          type="number"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="email"
          type="emai;"
          value={newFriend.emaail}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </>
  );
};

export default AddFriend;
