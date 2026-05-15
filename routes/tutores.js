const express = require("express");

const router = express.Router();

const Tutor =
  require("../models/Tutor");

router.post("/", async (req, res) => {
  const tutor =
    await Tutor.create(req.body);

  res.json(tutor);
});

router.get("/", async (req, res) => {
  const tutores =
    await Tutor.find();

  res.json(tutores);
});

router.put("/:id", async (req, res) => {
  const tutor =
    await Tutor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(tutor);
});

router.delete("/:id", async (req, res) => {
  await Tutor.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Tutor deletado"
  });
});

module.exports = router;