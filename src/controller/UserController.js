const { hash } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class UserController {
  async create(req, res) {
    try {
      let { name, email, password, isAdmin = false } = req.body;
      const allRequiredDataAvailable = name && email && password;

      if (!allRequiredDataAvailable)
        throw new AppError("Por favor preencha todos os campos necessários!");

      email = email.toLowerCase();

      const emailAlreadyExists = await knex("users").where({ email }).first();

      if (emailAlreadyExists) throw new AppError("Email já está em uso!");

      const hashedPassword = await hash(password, 10);

      await knex("users").insert({
        name,
        email,
        password: hashedPassword,
        isAdmin,
      });

      res.status(201).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = UserController;
