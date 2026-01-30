// ============================================
// CATALOGO.JS - SIMPLE Y FUNCIONAL
// ============================================
console.log("✅ catalogo.js cargado");

// DATOS DE PRODUCTOS FIJOS (no necesita API)
const productos = {
  hombre: [
    {
      nombre: "SAUVAGE DIOR",
      descripcion:
        "Fragancia masculina fresca y amaderada con notas de bergamota",
      precio: "120.000",
      destacado: true,
    },
    {
      nombre: "BLEU DE CHANEL",
      descripcion: "Aromática masculina con notas cítricas y amaderadas",
      precio: "115.000",
      destacado: true,
    },
    {
      nombre: "INVICTUS PACO RABANNE",
      descripcion: "Fragancia deportiva masculina intensa y vigorosa",
      precio: "90.000",
      destacado: false,
    },
    {
      nombre: "ACQUA DI GIO",
      descripcion: "Fragancia acuática fresca inspirada en el Mediterráneo",
      precio: "95.000",
      destacado: false,
    },
    {
      nombre: "ONE MILLION",
      descripcion: "Amaderada con notas de canela, moderna y atrevida",
      precio: "85.000",
      destacado: false,
    },
    {
      nombre: "HUGO BOSS BOTTLED",
      descripcion: "Clásica masculina especiada y elegante",
      precio: "88.000",
      destacado: false,
    },
  ],
  mujer: [
    {
      nombre: "BLACK OPIUM YSL",
      descripcion: "Fragancia oriental dulce con notas de café y vainilla",
      precio: "110.000",
      destacado: true,
    },
    {
      nombre: "J'ADORE DIOR",
      descripcion: "Fragancia floral femenina elegante y sofisticada",
      precio: "105.000",
      destacado: true,
    },
    {
      nombre: "GOOD GIRL CAROLINA HERRERA",
      descripcion: "Fragancia seductora para la mujer moderna",
      precio: "95.000",
      destacado: false,
    },
    {
      nombre: "LA VIE EST BELLE LANCÔME",
      descripcion: "Fragancia floral dulce y alegre",
      precio: "100.000",
      destacado: false,
    },
    {
      nombre: "CHANEL N°5",
      descripcion: "El clásico floral aldehído, icónico y eterno",
      precio: "125.000",
      destacado: true,
    },
    {
      nombre: "FLOWERBOMB VIKTOR&ROLF",
      descripcion: "Explosión floral intensa y romántica",
      precio: "108.000",
      destacado: false,
    },
  ],
};

// FUNCIÓN PARA CARGAR CATÁLOGO
function cargarCatalogo(genero) {
  console.log(`📦 Cargando catálogo para: ${genero}`);

  // Buscar el contenedor
  const contenedorId = `catalogo-${genero}`;
  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) {
    console.error(`❌ ERROR: No se encontró #${contenedorId}`);
    alert(`Error: No se puede cargar el catálogo. Contacta al soporte.`);
    return;
  }

  // Mostrar loading
  contenedor.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando catálogo ${genero === "hombre" ? "para hombre" : "para mujer"}...</p>
        </div>
    `;

  // Esperar un momento y cargar
  setTimeout(() => {
    const productosGenero = productos[genero] || [];

    if (productosGenero.length === 0) {
      contenedor.innerHTML = `
                <div class="no-productos">
                    <p>😔 No hay productos disponibles</p>
                    <button onclick="cargarCatalogo('${genero}')">Reintentar</button>
                </div>
            `;
      return;
    }

    // Crear HTML de productos
    let html = "";

    productosGenero.forEach((producto, index) => {
      // Escapar comillas para el onclick
      const nombreSeguro = producto.nombre.replace(/'/g, "\\'");

      html += `
                <div class="producto-card ${producto.destacado ? "destacado" : ""}">
                    ${producto.destacado ? '<div class="badge-destacado">⭐ DESTACADO</div>' : ""}
                    <div class="producto-img">
                        ${genero === "hombre" ? "👨" : "👩"}
                    </div>
                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p class="descripcion">${producto.descripcion}</p>
                        <div class="precio-container">
                            <span class="precio">$${producto.precio}</span>
                            <small>IVA incluido</small>
                        </div>
                        <button onclick="contactar('${nombreSeguro}')" class="btn-whatsapp">
                            💬 SOLICITAR POR WHATSAPP
                        </button>
                    </div>
                </div>
            `;
    });

    // Insertar en el contenedor
    contenedor.innerHTML = html;

    console.log(
      `✅ Catálogo ${genero} cargado: ${productosGenero.length} productos`,
    );
  }, 800);
}

// CARGAR AUTOMÁTICAMENTE AL INICIAR
document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM cargado");

  // Detectar página actual
  const url = window.location.href;
  const path = window.location.pathname;

  console.log("URL:", url);
  console.log("Path:", path);

  if (
    url.includes("hombre") ||
    path.includes("hombre") ||
    document.title.includes("Hombre")
  ) {
    console.log("🔄 Iniciando catálogo HOMBRE");
    cargarCatalogo("hombre");
  } else if (
    url.includes("mujer") ||
    path.includes("mujer") ||
    document.title.includes("Mujer")
  ) {
    console.log("🔄 Iniciando catálogo MUJER");
    cargarCatalogo("mujer");
  } else {
    console.log("ℹ️ No es página de catálogo específico");
  }
});

// Hacer función global
window.cargarCatalogo = cargarCatalogo;
