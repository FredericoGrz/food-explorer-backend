require("express-async-errors");
require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// Middleware para controle de erros na aplicação
app.use(errorHandler);

app.listen(PORT, () => console.log("Running server on port", PORT));
