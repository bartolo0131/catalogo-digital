// ===========================================
// CATÁLOGO DINÁMICO - PERFUMES HOMBRE/MUJER
// ===========================================
console.log("✅ Catalogo.js cargado");

// URL de tu backend (actualizada con tu URL)
const API_URL = "https://catalogo-digital-fu1l.onrender.com/api";

// Datos de ejemplo (por si falla la API)
const productosEjemplo = {
  hombre: [
    {
      nombre: "Sauvage Dior",
      descripcion: "Fragancia masculina fresca y amaderada",
      precio: 120.0,
    },
    {
      nombre: "Bleu de Chanel",
      descripcion: "Aromática masculina con notas cítricas",
      precio: 115.0,
    },
    {
      nombre: "Invictus Paco Rabanne",
      descripcion: "Fragancia deportiva masculina",
      precio: 90.0,
    },
    {
      nombre: "One Million",
      descripcion: "Amaderada con notas de canela",
      precio: 85.0,
    },
    {
      nombre: "Acqua di Gio",
      descripcion: "Fragancia acuática fresca",
      precio: 95.0,
    },
    {
      nombre: "Hugo Boss Bottled",
      descripcion: "Clásica masculina especiada",
      precio: 88.0,
    },
  ],
  mujer: [
    {
      nombre: "Black Opium YSL",
      descripcion: "Fragancia oriental dulce con café",
      precio: 110.0,
    },
    {
      nombre: "J'adore Dior",
      descripcion: "Fragancia floral femenina elegante",
      precio: 105.0,
    },
    {
      nombre: "Good Girl Carolina Herrera",
      descripcion: "Fragancia seductora premium",
      precio: 95.0,
    },
    {
      nombre: "La Vie Est Belle",
      descripcion: "Fragancia floral dulce",
      precio: 100.0,
    },
    {
      nombre: "Chanel N°5",
      descripcion: "Clásico floral aldehído",
      precio: 125.0,
    },
    {
      nombre: "Flowerbomb Viktor&Rolf",
      descripcion: "Explosión floral intensa",
      precio: 108.0,
    },
  ],
};

// Función para cargar catálogo
async function cargarCatalogo(genero) {
  const contenedor = document.getElementById(`catalogo-${genero}`);
  if (!contenedor) {
    console.error(`No se encontró el contenedor: catalogo-${genero}`);
    return;
  }

  // Mostrar loading
  contenedor.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando perfumes ${genero === "hombre" ? "para hombre" : "para mujer"}...</p>
        </div>
    `;

  let productos = [];

  try {
    console.log(
      `🌐 Intentando cargar desde API: ${API_URL}/productos/${genero}`,
    );

    // Intentar cargar desde API
    const response = await fetch(`${API_URL}/productos/${genero}`, {
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    if (response.ok) {
      productos = await response.json();
      console.log(`✅ API exitosa: ${productos.length} productos cargados`);
    } else {
      throw new Error(`API responded with status: ${response.status}`);
    }
  } catch (error) {
    console.warn(
      "⚠️ Error al cargar desde API, usando datos de ejemplo:",
      error.message,
    );
    // Usar datos de ejemplo si falla la API
    productos = productosEjemplo[genero] || [];
  }

  // Si no hay productos
  if (!productos || productos.length === 0) {
    contenedor.innerHTML = `
            <div class="no-products">
                <p>😔 No hay productos disponibles en este momento.</p>
                <button onclick="cargarCatalogo('${genero}')">🔄 Reintentar</button>
            </div>
        `;
    return;
  }

  // Limpiar contenedor
  contenedor.innerHTML = "";

  // Crear cards para cada producto
  productos.forEach((producto, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Escapar comillas para el onclick
    const nombreSeguro = producto.nombre.replace(/'/g, "\\'");

    card.innerHTML = `
            <div class="card-header">
                <h3>${producto.nombre}</h3>
                ${producto.precio ? `<span class="price">$${producto.precio.toFixed(2)}</span>` : ""}
            </div>
            <div class="card-body">
                <p class="description">${producto.descripcion || "Fragancia exclusiva de alta calidad"}</p>
            </div>
            <div class="card-footer">
                <button onclick="contactar('${nombreSeguro}')" class="whatsapp-btn">
                    <span class="whatsapp-icon">💬</span>
                    Solicitar por WhatsApp
                </button>
            </div>
        `;

    // Efecto de aparición
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    contenedor.appendChild(card);

    // Animación de entrada
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });

  console.log(`✅ Catálogo ${genero} cargado: ${productos.length} productos`);
}

// Cargar automáticamente cuando la página esté lista
document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM completamente cargado");

  // Determinar qué catálogo cargar según la página
  const path = window.location.pathname;

  if (path.includes("hombre.html") || path.includes("/hombre")) {
    console.log("👨 Cargando catálogo para hombres");
    cargarCatalogo("hombre");
  } else if (path.includes("mujer.html") || path.includes("/mujer")) {
    console.log("👩 Cargando catálogo para mujeres");
    cargarCatalogo("mujer");
  }
});

// Función para recargar manualmente
window.recargarCatalogo = function (genero) {
  cargarCatalogo(genero);
};
