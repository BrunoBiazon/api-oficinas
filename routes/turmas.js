const express = require("express");

const router = express.Router();

const Turma =
  require("../models/Turma");


// CREATE
router.post("/", async (req, res) => {
  const turma =
    await Turma.create(req.body);

  res.json(turma);
});


// READ
router.get("/", async (req, res) => {
  const turmas =
    await Turma.find();

  res.json(turmas);
});


// UPDATE
router.put("/:id", async (req, res) => {
  const turma =
    await Turma.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(turma);
});


// DELETE
router.delete("/:id", async (req, res) => {
  await Turma.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Turma deletada"
  });
});

module.exports = router;