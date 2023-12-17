import Image from "next/image";

import styles from "./styles.module.css";

const Card = ({ src, title, alt, className }: any) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.image_container}>
        <Image
          src={src}
          alt={`${alt} Card Image`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>

      <div className={styles.title}>{title}</div>

      <div className={styles.btn_container}>
        <button className={styles.card_btn} type='button'>
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card;
