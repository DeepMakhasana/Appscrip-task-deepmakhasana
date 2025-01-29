import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const Navbar = ({ menuToggle }: { menuToggle: boolean }) => {
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
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
