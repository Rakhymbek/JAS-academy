import { Button, Typography } from "@mui/material";

export function TodoItem({ todo, onRemove }) {
  return (
    <li style={{ border: "1px solid #C8C8C8", borderRadius: 4, padding: 14 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <span>{todo}</span>
        <Button onClick={onRemove}>Delete</Button>
      </div>
      <Typography sx={{ fontSize: 14, color: "#797979" }}>
        created {new Date().toLocaleString().slice(0, -3)}
      </Typography>
    </li>
  );
}
