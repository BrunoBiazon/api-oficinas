const mongoose = require("mongoose");

const OficinaSchema =
  new mongoose.Schema({
    nome: String,

    temaId:
      mongoose.Schema.Types.ObjectId,

    tutorId:
      mongoose.Schema.Types.ObjectId,

    professorId:
      mongoose.Schema.Types.ObjectId,

    data: String,

    horario: String,

    local: String
  });

module.exports =
  mongoose.model(
    "Oficina",
    OficinaSchema
  );