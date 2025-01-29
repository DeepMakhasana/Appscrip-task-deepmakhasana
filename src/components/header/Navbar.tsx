import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./header.module.css";

const Navbar = ({
  menuToggle,
  setMenuToggle,
}: {
  menuToggle: boolean;
  setMenuToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const navbarList = [
    {
      title: "SHOP",
      path: "/",
    },
    {
      title: "SKILLS",
      path: "#",
    },
    {
      title: "STORIES",
      path: "#",
    },
    {
      title: "ABOUT",
      path: "#",
    },
    {
      title: "CONTACT US",
      path: "#",
    },
  ];
  return (
    <div className={`${styles.navbarWrapper} ${menuToggle ? styles.show : styles.hide}`}>
      <ul id={styles.navbar}>
        {navbarList.map((link) => (
          <li key={link.title}>
            <Link href={link.path} onClick={() => setMenuToggle(false)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
