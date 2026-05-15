const mongoose = require("mongoose");

const TemaSchema =
  new mongoose.Schema({
    titulo: String,
    descricao: String,
    aprovado: Boolean
  });

module.exports =
  mongoose.model(
    "Tema",
    TemaSchema
  );