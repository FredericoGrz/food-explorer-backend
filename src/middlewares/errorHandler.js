const AppError = require("../Utils/AppError");

function errorHandler(error, req, res, next) {
  if (error instanceof AppError)
    res.status(error.status).json({ status: "Error", message: error.message });
  else res.status(500).json({ status: "Server Error", message: error.message });
}

module.exports = errorHandler;
