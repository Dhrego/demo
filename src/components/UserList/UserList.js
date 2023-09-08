import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{`${item.username} : ${item.age}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
