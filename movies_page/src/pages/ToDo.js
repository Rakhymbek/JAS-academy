import { Container } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";

export function ToDo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleCreate = useCallback(
    (todo) => {
      dispatch({ type: "todos/add", payload: todo });
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (index) => {
      dispatch({
        type: "todos/remove",
        index,
      });
    },
    [dispatch]
  );

  const handleDone = useCallback(
    (index) => {
      dispatch({
        type: "todos/doneChange",
        index,
      });
    },
    [dispatch]
  );

  return (
    <Container sx={{ paddingTop: 2 }}>
      <TodoForm onCreate={handleCreate} />
      <div style={{display: "flex", justifyContent: 'center', gap: 30}}>
        <TodoList todos={todos.filter(todo => !todo.done)} onRemove={handleRemove} onDone={handleDone} />
        <TodoList
          todos={todos.filter((todo) => todo.done)}
          onRemove={handleRemove}
          onDone={handleDone}
        />
      </div>
    </Container>
  );
}



/* const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCreate = useCallback(
    (todo) => {
      dispatch({ type: "todos/add", payload: todo });
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (index) => {
      dispatch({
        type: "todos/remove",
        payload: index,
      });
    },
    [dispatch]
  );

  const handleDone = useCallback(
    (index) => {
      dispatch({
        type: "todos/doneChange",
        payload: index,
      });
    },
    [dispatch]
  ); */