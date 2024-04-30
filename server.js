const express = require("express");
const { login, verifyToken } = require("./auth");
const app = express();

app.use(express.json());

app.post("/login", login);

app.get("/", verifyToken);

app.listen(5000, () => {
  console.log("Server running on the port : 5000");
});
