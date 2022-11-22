import { Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const TodoGenerator = ({ text, setText, onClick }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 4
      }}
    >
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value.toLocaleUpperCase())}
        autoCapitalize
        autoComplete={"off"}
      />
      <Button
        variant={"contained"}
        color={"warning"}
        onClick={onClick}
        endIcon={<AddIcon />}
      >
        Add
      </Button>
    </Grid>
  );
};
export default TodoGenerator;
