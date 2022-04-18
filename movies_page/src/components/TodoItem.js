import { Button, Typography } from "@mui/material";

export function TodoItem({ todo, onRemove, onDone }) {
  
  return (
    <li
      style={{
        border: "1px solid #C8C8C8",
        borderRadius: 4,
        padding: 14,
        backgroundColor: todo.done ? "#e1e1e6" : "#fff",
        boxShadow: todo.done
          ? "0px 0px 10px 2px rgb(73 68 68 / 20%) inset"
          : "0px 5px 8px 0px rgba(34, 60, 80, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <span>{todo.text}</span>
        <Button onClick={onRemove}>Delete</Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ display: "flex", fontSize: 14, color: "#797979" }}>
          created {todo.data}
        </Typography>
        <Button
          onClick={onDone}
          variant={todo.done ? 'outlined' : 'contained'}
          color='success'
        >
          Done
        </Button>
      </div>
    </li>
  );
}


/* () => onRemove(todo.id)
() => onDone(todo.id) */
