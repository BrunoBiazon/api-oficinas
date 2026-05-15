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

app.use(
  "/alunos",
  require("./routes/alunos")
);

app.use(
  "/tutores",
  require("./routes/tutores")
);

app.use(
  "/temas",
  require("./routes/temas")

)
app.listen(3000, () => {
  console.log(
    "Servidor rodando na porta 3000"
  );
});