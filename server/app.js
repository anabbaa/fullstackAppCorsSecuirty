const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const cors = require("cors");
//origin: "http://127.0.0.1:3000",
// origin: "*",//tro allow every link
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true, // that is for cookies 
  })
);
// other
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET"],
//     credentials: true,
//   })
// );
app.put("/users", async (req, res) => {
  try {
    const users = ["Nancy", "Zain", "Jack", "Olga"];
    res.json(users);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
});

module.exports = app;
