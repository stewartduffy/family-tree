import React from "react";
import { familyTree } from "./data";
import { TreeLevel, Debug } from "./components";
import { buildTreeData } from "./utils";

function App() {
  const processedData = buildTreeData(familyTree);

  console.log("processedData: ", processedData);

  return (
    <div>
      <TreeLevel people={processedData} />
      <Debug data={processedData} />
    </div>
  );
}

export default App;
