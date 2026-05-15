const mongoose = require("mongoose");

const TurmaSchema =
  new mongoose.Schema({
    nome: String,

    oficinaId:
      mongoose.Schema.Types.ObjectId,

    alunos: [
      mongoose.Schema.Types.ObjectId
    ]
  });

module.exports =
  mongoose.model(
    "Turma",
    TurmaSchema
  );ß