"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...main,{title,desc}]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copy = [...main]
    copy.splice(i,1)
    setMain(copy);
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
            onClick={() => deleteHandler(i)}
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
