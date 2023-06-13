import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  svg: React.ReactNode;
  title: string;
  desc: string;
  backgroundColor: string;
}

const Card = ({ svg, title, desc, backgroundColor }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.svgBgColor} ${backgroundColor}`}>
        <div className={styles.svg}>{svg}</div>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
