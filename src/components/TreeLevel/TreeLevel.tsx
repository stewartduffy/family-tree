import React from "react";
import Person from "../Person/Person";
import styles from "./TreeLevel.module.css"; // Import css modules stylesheet as styles

const TreeLevel = ({ people }: any) => {
  return (
    <div>
      {people.map((person: any) => {
        return (
          <ul key={`person=${person.id}`} className={styles["tree-level"]}>
            <Person {...person} />

            {person.children && person.children.length > 0 && (
              <div className={styles["children"]}>
                <TreeLevel people={person.children} />
              </div>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default TreeLevel;
