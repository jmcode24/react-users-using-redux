import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
};

export default Home;