import styles from "./Container.module.css";

const Container = (props) => {
  return <div className={styles.body}>{props.children}</div>;
};

export default Container;