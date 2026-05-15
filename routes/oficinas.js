const express = require("express");

const router = express.Router();

const Oficina =
  require("../models/Oficina");


// CREATE
router.post("/", async (req, res) => {
  const oficina =
    await Oficina.create(req.body);

  res.json(oficina);
});


// READ
router.get("/", async (req, res) => {
  const oficinas =
    await Oficina.find();

  res.json(oficinas);
});


// UPDATE
router.put("/:id", async (req, res) => {
  const oficina =
    await Oficina.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(oficina);
});


// DELETE
router.delete("/:id", async (req, res) => {
  await Oficina.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Oficina deletada"
  });
});

module.exports = router;