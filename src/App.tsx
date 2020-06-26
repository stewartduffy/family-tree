import React from "react";
import { familyTree } from "./data";
import { Person } from "./components";

function App() {
  return (
    <div>
      {familyTree.map((person) => {
        return <Person {...person} />;
      })}
    </div>
  );
}

export default App;
