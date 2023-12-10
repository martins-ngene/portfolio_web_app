import React from "react";

import { ButtonPropsI } from "../interface";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

// Button with styles for filled and outline
export const Button = ({ label, isFilled, href }: ButtonPropsI) => {
  return (
    <Link href={`${href}`} passHref>
      <button
        className={`${isFilled ? styles.filled_btn : styles.outlined_btn}`}>
        {label}
        {!isFilled && (
          <Image
            src='/angle_right.svg'
            alt='angle_right'
            width={10}
            height={10}
            className='ml-3'
          />
        )}
      </button>
    </Link>
  );
};