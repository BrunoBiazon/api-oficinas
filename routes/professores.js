const express = require("express");

const router = express.Router();

const Professor =
  require("../models/Professor");


router.post("/", async (req, res) => {
  const professor =
    await Professor.create(req.body);

  res.json(professor);
});


router.get("/", async (req, res) => {
  const professores =
    await Professor.find();

  res.json(professores);
});


router.put("/:id", async (req, res) => {
  const professor =
    await Professor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(professor);
});


router.delete("/:id", async (req, res) => {
  await Professor.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Professor deletado"
  });
});

module.exports = router;