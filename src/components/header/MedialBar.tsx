import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

const MedialBar = () => {
  return (
    <div id={styles.medialBarWrapper}>
      <div id={styles.medialBar} className="container">
        <div className={styles.medialBar__left}>
          <Image src={"/hamburger-menu.svg"} width={36} height={36} alt="menu" />
          <Image src={"/Logo.svg"} width={36} height={36} alt="logo" />
        </div>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className={styles.medialBar__right}>
          <Image src={"/search-normal.svg"} width={24} height={24} alt="search" />
          <Image src={"/heart.svg"} width={24} height={24} alt="wishlist" />
          <Image src={"/shopping-bag.svg"} width={24} height={24} alt="cart" />
          <Image src={"/profile.svg"} width={24} height={24} alt="user" className={styles.accountIcon} />
          <div>
            <b>ENG</b> <Image src={"/arrow-down.svg"} width={16} height={16} alt="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedialBar;
