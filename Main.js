import { Grid, Typography } from "@mui/material";
import React, { Component ,useState,useMemo} from 'react';
 import TodoGenerator from "././TodoGenerator";
import TodoListing from "././TodoListing";
 
export default function Main() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (!text) {
      return;
    }
    const tempTodo = [...todoList];
    tempTodo.push({
      text,
      isCompleted: false
    });
    setTodoList(tempTodo);
    setText("");
  };
  const pendingTodos = useMemo(() => todoList.filter((t) => !t.isCompleted), [
    todoList
  ]);
  const completedTodos = useMemo(() => todoList.filter((t) => t.isCompleted), [
    todoList
  ]);
  return (
    <Grid container sx={{ p: 4 }} spacing={4}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant={"h4"}
          sx={{ letterSpacing: "2px", fontWeight: 700 }}
        >
          Todo List
        </Typography>
      </Grid>
      <TodoGenerator text={text} setText={setText} onClick={handleAdd} />
      <Grid container spacing={2} sx={{ m: 2 }}>
        <TodoListing
          title={"All Items"}
          list={todoList}
          setTodoList={setTodoList}
          todoList={todoList}
        />
        <TodoListing title={"Pending Items"} list={pendingTodos} />
        <TodoListing title={"Completed Items"} list={completedTodos} />
      </Grid>
    </Grid>
  );
}
