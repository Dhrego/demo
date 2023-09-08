import React from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  return (
    <div>
      <UserInput />
      <UserList />
      {/* <ErrorModal /> */}
    </div>
  );
}

export default App;
