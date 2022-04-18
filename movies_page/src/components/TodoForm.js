import { Button, TextField } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

export function TodoForm({ onCreate }) {
  const [text, setText] = useState("");

  const handleKeyDown = useCallback(e => {
    if(e.key === 'Enter') {
        if(text.trim().length !== 0) {
            onCreate({text, data: new Date().toLocaleString().slice(0, -3), done: false, id: Date.now()});
            setText('');
        }
    }
  }, [text, onCreate]);
  

  const isDisabled = useMemo(() => {
    return text.trim().length === 0;
  }, [text]);


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
          disabled={isDisabled}
          onClick={() => {
            if(text.trim().length !== 0) {
                onCreate({text, data: new Date().toLocaleString().slice(0, -3), done: false, id: Date.now()});
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
