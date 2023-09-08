import Button from "../Button/Button";
import styles from "./UserInput.module.css";
const UserInput = () => {
  return (
    <form className={styles.input}>
      <label>Username</label>
      <input type="text" />
      <label>Text</label>
      <input type="text" />
      <Button />
    </form>
  );
};
export default UserInput;
