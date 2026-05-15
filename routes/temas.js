const express = require("express");

const router = express.Router();

const Tema =
  require("../models/Tema");


router.post("/", async (req, res) => {
  const tema =
    await Tema.create(req.body);

  res.json(tema);
});

router.get("/", async (req, res) => {
  const temas =
    await Tema.find();

  res.json(temas);
});

router.put("/:id", async (req, res) => {
  const tema =
    await Tema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(tema);
});

router.delete("/:id", async (req, res) => {
  await Tema.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Tema deletado"
  });
});

module.exports = router;