console.log("✅ catalogo.js cargado");

// Configuración
const API_URL = "https://catalogo-digital-fu1l.onrender.com/api";

async function cargarCatalogo(genero) {
  const contenedor = document.getElementById(`catalogo-${genero}`);
  if (!contenedor) return;

  contenedor.innerHTML = "<p>Cargando productos...</p>";

  try {
    const response = await fetch(`${API_URL}/productos/${genero}`);
    const productos = await response.json();

    contenedor.innerHTML = "";

    productos.forEach((p) => {
      const div = document.createElement("div");
      div.className = "card";

      // Escapar comillas para evitar errores
      const nombreProducto = p.nombre.replace(/'/g, "&#39;");

      div.innerHTML = `
        <h3>${p.nombre}</h3>
        <p>${p.descripcion || ""}</p>
        <button onclick="contactar('${p.nombre}')">
          💬 Contactar por WhatsApp
        </button>
      `;

      contenedor.appendChild(div);
    });
  } catch (error) {
    console.error("Error:", error);
    contenedor.innerHTML = "<p>Error al cargar productos</p>";
  }
}

// Cargar automáticamente
if (document.getElementById("catalogo-hombre")) {
  cargarCatalogo("hombre");
}
if (document.getElementById("catalogo-mujer")) {
  cargarCatalogo("mujer");
}
