"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  // Fetch tasks from API
  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setMain(data.data));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, desc }),
    });

    const data = await response.json();
    setMain([...main, data.data]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = async (id) => {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setMain(main.filter((task) => task._id !== id));
  };

  let renderTask = <h2>No Available Task</h2>;
  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(t._id)}
            className="bg-red-400 text-white rounded px-4 py-2 font-semibold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white items-center justify-center flex text-5xl font-semibold">
        Naman's TodoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-4 border-black rounded m-6 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-4 border-black rounded m-6 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 font-semibold">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-10 bg-gray-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
