const mongoose = require("mongoose");

const AlunoSchema =
  new mongoose.Schema({
    nome: String,
    escola: String,
    idade: Number
  });

module.exports =
  mongoose.model(
    "Aluno",
    AlunoSchema
  );