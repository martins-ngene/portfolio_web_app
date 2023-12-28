// import Image from "next/image";

import styles from "./styles.module.css";
import { CardPropsI } from "../interface";

const Card = ({ src, name, alt, className, onClick }: CardPropsI) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.image_container}>
        {/* <Image
          src={src}
          alt={`${alt} Card Image`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        /> */}
      </div>

      <div className={styles.name}>{name}</div>

      <div className={styles.btn_container}>
        <button className={styles.card_btn} onClick={onClick} type='button'>
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card;
