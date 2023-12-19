import { SectionPropsI } from "@/components/interface";
import styles from "./styles.module.css";

const Section = ({ header, id, className, children }: SectionPropsI) => {
  return (
    <div id={id} className={`${styles.container} ${className}`}>
      <h1 className={styles.header}>{header}</h1>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Section;
