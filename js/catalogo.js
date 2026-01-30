// ============================================
// CATÁLOGO FUNCIONAL - PERFUMES HOMBRE/MUJER
// ============================================
console.log("✅ Catalogo.js cargado - Listo para mostrar productos");

// Datos de productos FIJOS (funciona sin API)
const productosData = {
  hombre: [
    {
      id: 1,
      nombre: "Sauvage Dior",
      descripcion:
        "Fragancia masculina fresca y amaderada con notas de bergamota y pimienta",
      precio: 120.0,
    },
    {
      id: 2,
      nombre: "Bleu de Chanel",
      descripcion:
        "Aromática masculina con notas cítricas y amaderadas - Elegancia pura",
      precio: 115.0,
    },
    {
      id: 3,
      nombre: "Invictus Paco Rabanne",
      descripcion: "Fragancia deportiva masculina intensa - Victoria y éxito",
      precio: 90.0,
    },
    {
      id: 4,
      nombre: "Acqua di Gio Giorgio Armani",
      descripcion: "Fragancia acuática fresca inspirada en el mar Mediterráneo",
      precio: 95.0,
    },
    {
      id: 5,
      nombre: "One Million Paco Rabanne",
      descripcion: "Amaderada con notas de canela - Moderna, atrevida y lujosa",
      precio: 85.0,
    },
    {
      id: 6,
      nombre: "Hugo Boss Bottled",
      descripcion: "Clásica masculina especiada - Elegancia y sofisticación",
      precio: 88.0,
    },
  ],
  mujer: [
    {
      id: 1,
      nombre: "Black Opium Yves Saint Laurent",
      descripcion:
        "Fragancia oriental dulce con notas de café y vainilla - Adictiva",
      precio: 110.0,
    },
    {
      id: 2,
      nombre: "J'adore Dior",
      descripcion: "Fragancia floral femenina elegante - El lujo hecho perfume",
      precio: 105.0,
    },
    {
      id: 3,
      nombre: "Good Girl Carolina Herrera",
      descripcion:
        "Fragancia seductora premium - Para la mujer moderna y poderosa",
      precio: 95.0,
    },
    {
      id: 4,
      nombre: "La Vie Est Belle Lancôme",
      descripcion:
        "Fragancia floral dulce y alegre - La felicidad en un frasco",
      precio: 100.0,
    },
    {
      id: 5,
      nombre: "Chanel N°5",
      descripcion: "El clásico floral aldehído - Icónico, eterno y sofisticado",
      precio: 125.0,
    },
    {
      id: 6,
      nombre: "Flowerbomb Viktor&Rolf",
      descripcion: "Explosión floral intensa y romántica - Pura feminidad",
      precio: 108.0,
    },
  ],
};

// FUNCIÓN PARA CARGAR EL CATÁLOGO
function cargarCatalogo(genero) {
  console.log(`🔄 Cargando catálogo de perfumes para: ${genero}`);

  // 1. Encontrar el contenedor
  const contenedorId = `catalogo-${genero}`;
  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) {
    console.error(
      `❌ ERROR: No se encontró el elemento con ID: ${contenedorId}`,
    );
    console.error("Los IDs disponibles en la página son:");
    console.log([...document.querySelectorAll("[id]")].map((el) => el.id));
    return;
  }

  // 2. Mostrar mensaje de carga
  contenedor.innerHTML = `
        <div class="loading-catalogo">
            <div class="spinner"></div>
            <p>Cargando perfumes exclusivos ${genero === "hombre" ? "para hombre" : "para mujer"}...</p>
        </div>
    `;

  // 3. Esperar un momento para simular carga
  setTimeout(() => {
    // Obtener productos según el género
    const productos = productosData[genero] || [];

    if (productos.length === 0) {
      contenedor.innerHTML = `
                <div class="no-productos">
                    <p>😔 No hay productos disponibles en este momento.</p>
                    <button onclick="cargarCatalogo('${genero}')">🔄 Reintentar</button>
                </div>
            `;
      return;
    }

    // 4. Crear HTML de los productos
    let htmlProductos = "";

    productos.forEach((producto, index) => {
      // Escapar comillas simples para evitar errores en onclick
      const nombreSeguro = producto.nombre
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");

      htmlProductos += `
                <div class="producto-card" style="animation-delay: ${index * 0.1}s">
                    <div class="producto-imagen">
                        <div class="imagen-placeholder">
                            ${genero === "hombre" ? "👨" : "👩"}
                        </div>
                    </div>
                    <div class="producto-info">
                        <h3 class="producto-nombre">${producto.nombre}</h3>
                        <p class="producto-descripcion">${producto.descripcion}</p>
                        <div class="producto-precio">
                            <span class="precio">$${producto.precio.toFixed(2)}</span>
                            <span class="iva">IVA incluido</span>
                        </div>
                        <button onclick="contactar('${nombreSeguro}')" class="btn-whatsapp">
                            <span class="whatsapp-icon">💬</span>
                            Solicitar por WhatsApp
                        </button>
                    </div>
                </div>
            `;
    });

    // 5. Insertar productos en el contenedor
    contenedor.innerHTML = htmlProductos;

    // 6. Aplicar animaciones
    setTimeout(() => {
      const cards = contenedor.querySelectorAll(".producto-card");
      cards.forEach((card, index) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    }, 100);

    console.log(
      `✅ Catálogo ${genero} cargado: ${productos.length} productos mostrados`,
    );
  }, 800); // Pequeña pausa para mejor UX
}

// FUNCIÓN PARA DETECTAR Y CARGAR AUTOMÁTICAMENTE
function iniciarCatalogo() {
  console.log("🚀 Iniciando sistema de catálogo...");

  // Detectar en qué página estamos
  const path = window.location.pathname;
  const pagina = document.URL;

  console.log("📄 Página actual:", pagina);
  console.log("📍 Path:", path);

  // Verificar si estamos en página de hombre o mujer
  if (pagina.includes("hombre") || path.includes("hombre")) {
    console.log("👨 Detectada página HOMBRE");
    cargarCatalogo("hombre");
  } else if (pagina.includes("mujer") || path.includes("mujer")) {
    console.log("👩 Detectada página MUJER");
    cargarCatalogo("mujer");
  } else {
    console.log("ℹ️ No es página de catálogo específico");
  }
}

// ESPERAR A QUE LA PÁGINA CARGUE COMPLETAMENTE
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarCatalogo);
} else {
  iniciarCatalogo();
}

// Hacer función disponible globalmente para recargas manuales
window.cargarCatalogo = cargarCatalogo;
window.recargarCatalogo = cargarCatalogo;

console.log("🎯 Funciones disponibles:");
console.log("- cargarCatalogo('hombre') o cargarCatalogo('mujer')");
console.log("- recargarCatalogo('hombre') o recargarCatalogo('mujer')");
