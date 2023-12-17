import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { TodoContext } from "../../contexts/TodoContext";

function InputBar() {
  const { input, setInput, handleSubmit } = useContext(TodoContext);

  return (
    <div className="flex gap-2">
      <TextField
        id="outlined-basic"
        label="Add a todo"
        variant="outlined"
        size="small"
        className="w-[33rem]"
        value={input.title}
        onChange={(e) => setInput({ title: e.target.value })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Create
      </Button>
    </div>
  );
}

export default InputBar;
