const { verify } = require("jsonwebtoken");
const AppError = require("../Utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("JWT Token não informado", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { userId, isAdmin } = verify(token, authConfig.jwt.secret);
    req.user = {
      id: Number(userId),
      isAdmin,
    };

    return next();
  } catch {
    throw new AppError("JWT token invalido", 401);
  }
}

module.exports = ensureAuthenticated;
