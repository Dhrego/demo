import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const hideHandler = () => {
    props.onShow();
  };
  return (
    <div className={styles.backdrop} onClick={hideHandler}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.show.title}</h2>
          <div className={styles.content}>{props.show.message}</div>
          <button className={styles.actions} onClick={hideHandler}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
