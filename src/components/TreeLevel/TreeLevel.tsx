import React from "react";
import Person from "../Person/Person";

const TreeLevel = ({ people }: any) => {
  return (
    <div>
      {people.map((person: any) => {
        console.log("person: ", person);
        return (
          <ul>
            <Person {...person} />

            {person.children && person.children.length > 0 && (
              <TreeLevel people={person.children} />
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default TreeLevel;
