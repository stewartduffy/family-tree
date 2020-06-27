import React from "react";
import { familyTree } from "./data";
import { TreeLevel, Debug } from "./components";
import { processData } from "./utils";

function App() {
  const processedData = processData(familyTree);

  console.log("processedData: ", processedData);

  return (
    <div>
      <TreeLevel people={processedData} />
      <Debug data={processedData} />
    </div>
  );
}

export default App;
