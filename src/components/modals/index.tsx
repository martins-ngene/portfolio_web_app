import styles from "./styles.module.css";
import { ModalPropsI } from "../interface";
import Image from "next/image";

const Modal = ({ children, onClick }: ModalPropsI) => {
  return (
    <div className={styles.modal_container}>
      <button className={styles.close_button} onClick={onClick}>
        <Image
          src='/close.svg'
          alt='Cancel Action button'
          width={25}
          height={25}
        />
      </button>
      <div className={styles.modal_body_container}>
        <div className={styles.form_container}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
