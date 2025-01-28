import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

const TopNotificationBar = () => {
  return (
    <div id={styles.topNotificationBar}>
      <div>
        <Image src={"/dashboard.svg"} width={16} height={16} alt="dashboard" />
        <span>Lorem ipsum dolor</span>
      </div>
      <div>
        <Image src={"/dashboard.svg"} width={16} height={16} alt="dashboard" />
        <span>Lorem ipsum dolor</span>
      </div>
      <div>
        <Image src={"/dashboard.svg"} width={16} height={16} alt="dashboard" />
        <span>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default TopNotificationBar;
