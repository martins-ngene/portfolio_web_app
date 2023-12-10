import Image from "next/image";
import React, { useState } from "react";

import styles from "./styles.module.css";
import { nav_links } from "../constants";
import Link from "next/link";
import Menu from "../menu";
import Logo from "../logo";

const Navbar = () => {
  // Menu useState to hide and show the menu component
  const [isOpen, setIsOpen] = useState(false);

  // This function opens and closes the menu using the Menu useState above
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className={styles.container}>
      {/* Logo */}
      <Logo />
      {/* Navigation Links */}
      <div className={styles.links_container}>
        {nav_links.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
      <button onClick={toggleMenu} className={styles.menu_container}>
        <Image src='/menu.svg' alt='open menu' fill />
      </button>
      {isOpen && <Menu />}
    </div>
  );
};

export default Navbar;
