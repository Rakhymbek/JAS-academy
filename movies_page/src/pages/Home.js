import { useState } from "react";
import { factorial } from "../components/factorial";
import TextField from "@mui/material/TextField";

export function Home() {
  const [number, setNumber] = useState(null);

  function handleChange(e) {
    setNumber(+e.target.value);
  }

  return (
    <div>
      <div>
        <TextField
          id="standard-basic"
          label="Number"
          variant="standard"
          onChange={handleChange}
          type="number"
        />
      </div>
      <div>{number < 1 ? "Type number higher than 0" : factorial(number)}</div>
    </div>
  );
}
