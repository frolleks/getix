import React from "react";
import MonacoEditor from "react-monaco-editor";

export default function App() {
  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
    />
  );
}
