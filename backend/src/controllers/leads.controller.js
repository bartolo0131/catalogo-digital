const Lead = require("../models/lead.model");

exports.registrar = (req, res) => {
  const { nombre, telefono, producto, genero } = req.body;

  if (!nombre || !telefono || !producto || !genero) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  Lead.crear({ nombre, telefono, producto, genero }, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ ok: true });
  });
};
