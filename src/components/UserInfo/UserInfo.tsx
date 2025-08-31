import React from "react";
import styles from "./UserInfo.module.scss";
const UserInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.userName}>Illia Voitenko</h1>
      <p className={styles.roleUser}>Front End Engineer</p>
      <p className={styles.description}>
        Writing clean, reusable & secure code
      </p>
    </div>
  );
};

export default UserInfo;
