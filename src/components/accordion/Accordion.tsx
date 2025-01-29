"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import styles from "./accordion.module.css";

interface IAccordionProps {
  title: string;
  subTitle?: string;
  defualtValue: boolean;
  children: ReactNode;
}

const Accordion = ({ title, subTitle, defualtValue, children }: IAccordionProps) => {
  const [accordionToggle, setAccordionToggle] = useState(defualtValue);

  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordion__Header} onClick={() => setAccordionToggle((pre) => !pre)}>
        <div className={styles.accordion__Header_left}>
          <h4>{title}</h4>
          {subTitle && <span>{subTitle}</span>}
        </div>
        <div className={styles.accordion__Header_right}>
          {accordionToggle ? (
            <Image src={"/arrow-up.svg"} width={20} height={20} alt="open" />
          ) : (
            <Image src={"/arrow-down.svg"} width={20} height={20} alt="close" />
          )}
        </div>
      </div>
      <div className={styles[accordionToggle ? "accordion__Content_show" : "accordion__Content_hide"]}>{children}</div>
    </div>
  );
};

export default Accordion;
