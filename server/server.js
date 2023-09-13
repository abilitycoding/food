const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}!`);
});
