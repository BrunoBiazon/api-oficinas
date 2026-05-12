const express = require("express");
const router = express.Router();

const Aluno =
  require("../models/Aluno");

router.post("/", async (req, res) => {
  const aluno =
    await Aluno.create(req.body);

  res.json(aluno);
});


router.get("/", async (req, res) => {
  const alunos =
    await Aluno.find();

  res.json(alunos);
});

router.put("/:id", async (req, res) => {
  const aluno =
    await Aluno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(aluno);
});

router.delete("/:id", async (req, res) => {
  await Aluno.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Aluno deletado"
  });
});

module.exports = router;