import React from "react";
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div className={styles.div}>
      <div className={styles.ring}></div>
    </div>
  );
};

export default Loading;
