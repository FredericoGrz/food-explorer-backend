require("express-async-errors");
require("dotenv/config");
const express = require("express");
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log("Running server on port", PORT));
