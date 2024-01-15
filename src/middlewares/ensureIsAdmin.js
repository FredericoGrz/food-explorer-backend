const AppError = require("../Utils/AppError");

function ensureIsAdmin(req, res, next) {
  try {
    if (!req.user.isAdmin)
      throw new AppError(
        "Usuário não tem permissão para realizar esta ação",
        401
      );
    next();
  } catch {
    throw new AppError(
      "Usuário não tem permissão para realizar esta ação",
      401
    );
  }
}

module.exports = ensureIsAdmin;
