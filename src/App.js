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
  const deleteItemHandler = (itemId) => {
    console.log("clicked", itemId);
    setList((prev) => {
      const updatedList = prev.filter((item) => item.id !== itemId);
      console.log(updatedList, "updated list");
      return updatedList;
    });
  };
  return (
    <div>
      <UserInput addToList={dataHandler} />
      <UserList items={list} onDeleteItem={deleteItemHandler} />
      {/* <ErrorModal /> */}
    </div>
  );
};

export default App;
