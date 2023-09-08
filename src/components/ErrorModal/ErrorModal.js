import styles from "./ErrorModal.module.css";
const ErrorModal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Error</h2>
          <div className={styles.content}>
            lorems dfasdfsdf asdf asdf asdf asdf asdf as
          </div>
          <button className={styles.actions}>close</button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
