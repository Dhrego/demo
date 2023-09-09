import { useState } from "react";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorMsg({
        title: "Invalid input",
        message: "Please enter your Name and Age",
      });
      return;
    }

    if (+age < 1) {
      setErrorMsg({
        title: "Invalid age",
        message: "Please enter a valid Age (age above 1)",
      });
      return;
    }

    const user = { username, age };
    props.addToList(user);

    setUsername("");
    setAge("");
  };
  const backdropHandler = () => {
    setErrorMsg(null);
  };
  return (
    <>
      {errorMsg && <ErrorModal show={errorMsg} onShow={backdropHandler} />}
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
    </>
  );
};
export default UserInput;
