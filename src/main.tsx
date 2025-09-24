import { createRoot } from "react-dom/client";
import React, { type FormEvent, useState } from "react";

function Application() {
  const [tasks, setTasks] = useState([
    { title: "my task" },
    { title: "my other task" },
  ]);

  const [title, setTitle] = useState("hei");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const task = { title };
    setTasks((oldTasks) => [task, ...oldTasks]);
  }

  return (
    <>
      <h1>My App</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.title}</li>
        ))}
      </ul>
      <h2>Add new tasks</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div>
          <button>Add </button>
        </div>
      </form>
    </>
  );
}

createRoot(document.getElementById("app")!).render(<Application />);
