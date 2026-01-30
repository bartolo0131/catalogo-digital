
const express = require("express");
const app = express();

app.use(express.json());

// 👇 IMPORTAS RUTAS
const productosRoutes = require("./routes/productos.routes");

// 👇 MONTAJE DE RUTAS (ESTO TE FALTABA)
app.use("/api/productos", productosRoutes);

// Ruta test (opcional pero recomendada)
app.get("/", (req, res) => {
  res.send("Backend funcionando OK");
});

module.exports = app;
