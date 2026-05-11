const mongoose = require("mongoose");

const ProfessorSchema =
  new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
  });

module.exports =
  mongoose.model(
    "Professor",
    ProfessorSchema
  );