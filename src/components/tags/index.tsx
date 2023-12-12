import styles from "./styles.module.css";

const Tag = ({ tag_name }: { tag_name: string }) => {
  return <span className={styles.tag}>{tag_name}</span>;
};

export default Tag;
