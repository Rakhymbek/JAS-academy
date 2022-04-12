import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function TodoForm({ onCreate }) {
  const [text, setText] = useState("");

  function handleKeyDown(e) {
    if(e.key === 'Enter') {
        if(text) {
            onCreate(text);
            setText('');
        }
    }
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'center'}}>
        <TextField className=""
          label="Enter name"
          value={text}
          sx={{ width: 440, marginRight: 2.5}}
          size="small"
          margin="none"
          onKeyDown={handleKeyDown}
          onChange={(e) => setText(e.target.value)}

        />
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            if(text) {
                onCreate(text);
                setText('');
            }
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
