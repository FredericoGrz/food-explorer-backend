const knex = require("../database/knex");
const AppError = require("../Utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        throw new AppError("Informe Email e Senha para efetuar o login");

      const user = await knex("users").where({ email }).first();

      if (!user) throw new AppError("Email e/ou senha incorreta", 401);

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched)
        throw new AppError("Email e/ou senha incorreta", 401);

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: String(user.id),
        expiresIn,
      });

      delete user.password;
      delete user.created_at;
      delete user.updated_at;

      return res.json({ user, token });
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = SessionController;
