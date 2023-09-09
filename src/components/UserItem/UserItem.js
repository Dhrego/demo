const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return <li onClick={deleteHandler}>{props.children}</li>;
};
export default UserItem;
