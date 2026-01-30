const db = require("../config/db");

exports.obtenerPorGenero = (genero, callback) => {
  const sql = "SELECT * FROM productos WHERE genero = ?";
  db.query(sql, [genero], callback);
};
