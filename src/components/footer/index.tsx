import Image from "next/image";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.column_one}>
        <p>Developed with 💚 by Martins Ngene</p>
      </div>
      <div className={styles.column_two}>
        Powered by
        <div className={styles.vercel_container}>
          <Image src='/vercel.svg' alt='open menu' fill />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
