const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "catalogo",
});

connection.connect((err) => {
  if (err) {
    console.error("Error BD:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

module.exports = connection;
