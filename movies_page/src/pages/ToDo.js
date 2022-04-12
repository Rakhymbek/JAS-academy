import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

export function ToDo() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleCreate(text) {
    setTodos([...todos, text]);
  }

  function handleRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <Container sx={{ paddingTop: 2 }}>
      <TodoForm onCreate={handleCreate} />
      <TodoList todos={todos} onRemove={handleRemove} />
    </Container>
  );
}
