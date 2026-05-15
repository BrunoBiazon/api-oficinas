const mongoose = require("mongoose");

const TutorSchema =
  new mongoose.Schema({
    nome: String,
    email: String,
    curso: String,
    periodo: String
  });

module.exports =
  mongoose.model(
    "Tutor",
    TutorSchema
  );