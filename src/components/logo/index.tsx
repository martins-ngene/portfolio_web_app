import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Image src='/logo.svg' alt='logo' width={25} height={325} />
      <div className={styles.brand}>Martins Ngene</div>
    </div>
  );
};

export default Logo;
