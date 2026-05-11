const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/ellp"
);

app.use(
  "/professores",
  require("./routes/professores")
);

app.listen(3000, () => {
  console.log(
    "Servidor rodando na porta 3000"
  );
});