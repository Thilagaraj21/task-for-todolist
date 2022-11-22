import { Box, Grid, Paper, Switch, Typography } from "@mui/material";
import React from "react";

const TodoListing = ({ list, title, todoList, setTodoList }) => {
  const handleChange = (event, index) => {
    const tempTodos = [...todoList];
    tempTodos[index].isCompleted = event.target.checked;
    setTodoList(tempTodos);
  };
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      <Paper sx={{ p: 1 }} variant={"outlined"} square>
        <Typography gutterBottom variant={"h6"} sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        {list?.map((t, i) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: 5
            }}
            key={i}
          >
            <Typography component={"span"} gutterBottom>
              {t?.text}
            </Typography>
            {title === "All Items" ? (
              <Switch
                color="warning"
                checked={t?.isCompleted}
                onChange={(event) => handleChange(event, i)}
              />
            ) : null}
          </Box>
        ))}
      </Paper>
    </Grid>
  );
};
export default TodoListing;
