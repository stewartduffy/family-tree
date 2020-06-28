import React from "react";
import { familyTree } from "./data";
import { TreeLevel, Debug } from "./components";
import { buildTreeData } from "./utils";
import "./App.css";

function App() {
  const processedData = buildTreeData(familyTree);

  return (
    <div>
      <TreeLevel people={processedData} />
      <Debug data={processedData} />
    </div>
  );
}

export default App;
