import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
// import ErrorModal from "./components/ErrorModal/ErrorModal";

const App = () => {
  const [list, setList] = useState([
    { username: "key", age: 12, id: "a1" },
    { username: "Darryl", age: 24, id: "a2" },
  ]);

  const dataHandler = (user) => {
    setList((prevState) => [
      ...prevState,
      { ...user, id: Math.random().toString() },
    ]);
  };
  return (
    <div>
      <UserInput addToList={dataHandler} />
      <UserList items={list} />
      {/* <ErrorModal /> */}
    </div>
  );
};

export default App;
