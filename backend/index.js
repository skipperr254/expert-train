const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/login", (req, res) => {
  res.json({message: "successful"})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


