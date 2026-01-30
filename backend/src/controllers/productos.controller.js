const Producto = require("../models/producto.model");

exports.getProductos = (req, res) => {
  const { genero } = req.params;

  Producto.obtenerPorGenero(genero, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};
