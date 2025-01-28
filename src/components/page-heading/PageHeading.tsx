import React from "react";
import styles from "./heading.module.css";

interface IPageHeadingProps {
  title: string;
  tagLine: string;
}

const PageHeading = ({ title, tagLine }: IPageHeadingProps) => {
  return (
    <div className={`container ${styles.pageHeadingWrapper}`}>
      <h1>{title}</h1>
      <p>{tagLine}</p>
    </div>
  );
};

export default PageHeading;
