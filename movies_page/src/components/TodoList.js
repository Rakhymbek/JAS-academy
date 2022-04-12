import { Typography } from "@mui/material";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onRemove }) {
  return (
    <ol
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
        gap: 20,
        padding: 0,
        listStyle: 'none'
      }}
    >
      {todos.map((todo, index) => (
        <TodoItem todo={todo} onRemove={() => onRemove(index)} key={index}>
          {todo}
        </TodoItem>
      ))}
    </ol>
  );
}
