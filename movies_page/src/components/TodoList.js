import { Typography } from "@mui/material";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onRemove, onDone }) {
  return (
    <div style={{ minWidth: 33 + '%'}}>
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 20,
          padding: 0,
          listStyle: "none",
        }}
      >
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            onRemove={() => onRemove(index)}
            onDone={() => onDone(index)}
            key={index}
          >
            {todo}
          </TodoItem>
        ))}
      </ol>
    </div>
  );
}



/* onRemove={onRemove}
            onDone={onDone} */
