import React from "react";

function Debug({ data = [] }: any) {
  if (process.env.REACT_APP_DEBUG === "true") {
    return (
      <pre
        style={{
          background: "#f6f8fa",
          fontSize: ".65rem",
          padding: ".5rem",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }

  return null;
}

export default Debug;
