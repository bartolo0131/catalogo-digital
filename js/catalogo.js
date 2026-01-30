console.log("catalogo.js cargado");

// URL de la API para producción
const API_URL = "https://catalogo-digital-fu1l.onrender.com/api";

async function cargarCatalogo(genero) {
  const contenedor = document.getElementById(`catalogo-${genero}`);
  if (!contenedor) {
    console.warn(`No se encontró el contenedor: catalogo-${genero}`);
    return;
  }

  contenedor.innerHTML = `
    <div class="loading">
      <p>Cargando productos...</p>
      <div class="spinner"></div>
    </div>
  `;

  try {
    console.log(`Cargando productos para: ${genero}`);
    const response = await fetch(`${API_URL}/productos/${genero}`, {
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
    }

    const productos = await response.json();
    console.log(`Productos recibidos:`, productos);

    if (!productos || productos.length === 0) {
      contenedor.innerHTML = `
        <div class="no-productos">
          <p>⚠️ No hay productos disponibles en este momento</p>
          <p>Por favor, intenta más tarde</p>
        </div>
      `;
      return;
    }

    contenedor.innerHTML = "";

    productos.forEach((p) => {
      const div = document.createElement("div");
      div.classList.add("card");

      // Escapar comillas para el onclick
      const nombreSeguro = p.nombre.replace(/'/g, "\\'");

      div.innerHTML = `
        <div class="card-content">
          <h3>${p.nombre}</h3>
          <p class="descripcion">${p.descripcion || "Descripción no disponible"}</p>
          ${p.precio ? `<p class="precio">$${parseFloat(p.precio).toFixed(2)}</p>` : ""}
          <button onclick="contactar('${nombreSeguro}')" class="btn-contactar">
            <span>📞 Solicitar información</span>
          </button>
        </div>
      `;

      contenedor.appendChild(div);
    });

    console.log(`✅ Catálogo ${genero} cargado: ${productos.length} productos`);
  } catch (error) {
    console.error("❌ Error cargando catálogo:", error);
    contenedor.innerHTML = `
      <div class="error">
        <p>😕 Error al cargar los productos</p>
        <p class="error-message">${error.message}</p>
        <button onclick="cargarCatalogo('${genero}')" class="btn-reintentar">
          🔄 Reintentar
        </button>
        <p class="hint">Si el problema persiste, contacta al administrador</p>
      </div>
    `;
  }
}

// Cargar automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado, buscando catálogos...");

  if (document.getElementById("catalogo-hombre")) {
    console.log("Cargando catálogo hombre...");
    cargarCatalogo("hombre");
  }

  if (document.getElementById("catalogo-mujer")) {
    console.log("Cargando catálogo mujer...");
    cargarCatalogo("mujer");
  }
});

// También exponer la función globalmente para recarga manual
window.reloadCatalogo = function (genero) {
  cargarCatalogo(genero);
};
