

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/leads", require("./routes/leads.routes"));

app.use("/api/productos", require("./routes/productos.routes"));

app.get("/", (req, res) => {
  res.send("API funcionando");
});

module.exports = app;
