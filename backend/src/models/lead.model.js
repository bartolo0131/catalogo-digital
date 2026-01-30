const db = require("../config/db");

exports.crear = (data, callback) => {
  const sql = `
    INSERT INTO leads (nombre, telefono, producto, genero)
    VALUES (?, ?, ?, ?)
  `;
  const { nombre, telefono, producto, genero } = data;
  db.query(sql, [nombre, telefono, producto, genero], callback);
};
