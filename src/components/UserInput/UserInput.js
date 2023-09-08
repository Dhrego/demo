import { useState } from "react";
import Button from "../Button/Button";
import styles from "./UserInput.module.css";
const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    if (!username || !age) {
      alert("Please enter your name and Age");
      return;
    }
    if (age < 1) {
      alert("Invalid age");
      return;
    }
    e.preventDefault();
    const user = { username, age };
    props.addToList(user);

    setUsername("");
    setAge("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.input}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        value={username}
        onChange={usernameInputHandler}
        id="username"
      />
      <label htmlFor="number">Age</label>
      <input type="number" value={age} onChange={ageInputHandler} id="age" />
      <Button />
    </form>
  );
};
export default UserInput;
