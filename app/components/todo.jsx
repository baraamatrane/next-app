"use client";

import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    setTodo(data);
  }, []);

  return <h1>{todo.title}</h1>;
}

export default Todo;
