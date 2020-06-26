import React from "react";
import objstr from "obj-str";
import styles from "./Person.module.css"; // Import css modules stylesheet as styles

function Person({ id, name, children, gender, parents }: any) {
  const personClassName = objstr({
    [styles["person"]]: true,
    [styles["person--male"]]: gender === "male",
    [styles["person--female"]]: gender === "female",
  });

  return <div className={personClassName}>{name}</div>;
}

export default Person;
