const express = require("express");

const app = express();


app.use(express.use());


app.get("/user", (req, res) => {
  try {
    res.status(200).send("get");
  } catch (error) {
    res.status(404).send("error");
  }
});


app.post("/user", (req, res) => {
  try {
    res.status(200).send("post");
  } catch (error) {
    res.status(404).send("error");
  }
});

app.patch("/user/:id", (req, res) => {
  try {
    res.status(200).send("patch");
  } catch (error) {
    res.status(404).send("error");
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    res.status(200).send("delete");
  } catch (error) {
    res.status(404).send("error");
  }
});


app.listen(3000, () => {
  console.log("server start");

  console.log("change");
  
//   db conect function  
});
