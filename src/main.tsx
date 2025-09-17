import { createRoot } from "react-dom/client";
import React, { useState } from "react";

function Application() {
  const [tasks, setTasks] = useState([
    { description: "something" },
    { description: " something else" },
  ]);
  return <h1>My App</h1>;
}

createRoot(document.getElementById("app")!).render(<Application />);
