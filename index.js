const express = require("express");
const axios = require("axios");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
