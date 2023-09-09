import styles from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";
const UserList = (props) => {
  const deleteHandler = (itemId) => {
    console.log(itemId);
    props.onDeleteItem(itemId);
  };
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <UserItem
            onDelete={deleteHandler}
            key={item.id}
            id={item.id}
          >{`${item.username} : ${item.age}`}</UserItem>
          // <li
          //   onClick={deleteHandler}
          //   key={item.id}
          // >{`${item.username} : ${item.age}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
