// ============================================
// CATALOGO.JS - CON IMÁGENES DE MARCAS
// ============================================
console.log("✅ catalogo.js cargado");

// URLs de imágenes de marcas (imágenes gratis de internet)
const imagenesMarcas = {
  // Imágenes para hombre
  sauvage:
    "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=200&h=200&fit=crop&auto=format",
  bleu: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&h=200&fit=crop&auto=format",
  invictus:
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&h=200&fit=crop&auto=format",
  acqua:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop&auto=format",
  million:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",
  boss: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",

  // Imágenes para mujer
  blackopium:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
  jadore:
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&h=200&fit=crop&auto=format",
  goodgirl:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop&auto=format",
  vie: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=200&h=200&fit=crop&auto=format",
  chanel:
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&h=200&fit=crop&auto=format",
  flowerbomb:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",

  // Imagen por defecto
  default:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",
};

// DATOS DE PRODUCTOS (SIN PRECIOS)
const productos = {
  hombre: [
    {
      id: 1,
      nombre: "SAUVAGE DIOR",
      marca: "Dior",
      descripcion:
        "Fragancia masculina fresca y amaderada con notas de bergamota",
      imagen: imagenesMarcas.sauvage,
      destacado: true,
    },
    {
      id: 2,
      nombre: "BLEU DE CHANEL",
      marca: "Chanel",
      descripcion: "Aromática masculina con notas cítricas y amaderadas",
      imagen: imagenesMarcas.bleu,
      destacado: true,
    },
    {
      id: 3,
      nombre: "INVICTUS PACO RABANNE",
      marca: "Paco Rabanne",
      descripcion: "Fragancia deportiva masculina intensa y vigorosa",
      imagen: imagenesMarcas.invictus,
      destacado: false,
    },
    {
      id: 4,
      nombre: "ACQUA DI GIO",
      marca: "Giorgio Armani",
      descripcion: "Fragancia acuática fresca inspirada en el Mediterráneo",
      imagen: imagenesMarcas.acqua,
      destacado: false,
    },
    {
      id: 5,
      nombre: "ONE MILLION",
      marca: "Paco Rabanne",
      descripcion: "Amaderada con notas de canela, moderna y atrevida",
      imagen: imagenesMarcas.million,
      destacado: false,
    },
    {
      id: 6,
      nombre: "HUGO BOSS BOTTLED",
      marca: "Hugo Boss",
      descripcion: "Clásica masculina especiada y elegante",
      imagen: imagenesMarcas.boss,
      destacado: false,
    },
  ],
  mujer: [
    {
      id: 1,
      nombre: "BLACK OPIUM YSL",
      marca: "Yves Saint Laurent",
      descripcion: "Fragancia oriental dulce con notas de café y vainilla",
      imagen: imagenesMarcas.blackopium,
      destacado: true,
    },
    {
      id: 2,
      nombre: "J'ADORE DIOR",
      marca: "Dior",
      descripcion: "Fragancia floral femenina elegante y sofisticada",
      imagen: imagenesMarcas.jadore,
      destacado: true,
    },
    {
      id: 3,
      nombre: "GOOD GIRL",
      marca: "Carolina Herrera",
      descripcion: "Fragancia seductora para la mujer moderna",
      imagen: imagenesMarcas.goodgirl,
      destacado: false,
    },
    {
      id: 4,
      nombre: "LA VIE EST BELLE",
      marca: "Lancôme",
      descripcion: "Fragancia floral dulce y alegre",
      imagen: imagenesMarcas.vie,
      destacado: false,
    },
    {
      id: 5,
      nombre: "CHANEL N°5",
      marca: "Chanel",
      descripcion: "El clásico floral aldehído, icónico y eterno",
      imagen: imagenesMarcas.chanel,
      destacado: true,
    },
    {
      id: 6,
      nombre: "FLOWERBOMB",
      marca: "Viktor&Rolf",
      descripcion: "Explosión floral intensa y romántica",
      imagen: imagenesMarcas.flowerbomb,
      destacado: false,
    },
  ],
};

// FUNCIÓN PARA CARGAR CATÁLOGO
function cargarCatalogo(genero) {
  console.log(`📦 Cargando catálogo para: ${genero}`);

  const contenedor = document.getElementById(`catalogo-${genero}`);
  if (!contenedor) {
    console.error(`❌ No se encontró #catalogo-${genero}`);
    return;
  }

  // Mostrar loading
  contenedor.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando catálogo ${genero === "hombre" ? "para hombre" : "para mujer"}...</p>
        </div>
    `;

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
      const nombreSeguro = producto.nombre.replace(/'/g, "\\'");

      html += `
                <div class="producto-card ${producto.destacado ? "destacado" : ""}">
                    ${producto.destacado ? '<div class="badge-destacado">⭐ MÁS VENDIDO</div>' : ""}
                    <div class="producto-imagen-container">
                        <img src="${producto.imagen}" 
                             alt="${producto.nombre}" 
                             class="producto-imagen"
                             onerror="this.src='${imagenesMarcas.default}'">
                        <div class="marca-logo">${producto.marca}</div>
                    </div>
                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p class="producto-marca">${producto.marca}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                        <button onclick="contactar('${nombreSeguro} - ${producto.marca}')" class="btn-whatsapp">
                            💬 SOLICITAR INFORMACIÓN
                        </button>
                    </div>
                </div>
            `;
    });

    // Añadir mensaje de "¿No encontraste lo que buscabas?"
    html += `
            <div class="mensaje-personalizado">
                <div class="mensaje-contenido">
                    <span class="mensaje-icono">🔍</span>
                    <h3>¿NO ENCONTRASTE LO QUE BUSCABAS?</h3>
                    <p>Pregúntanos personalmente, tenemos muchas más opciones que no están en el catálogo.</p>
                    <button onclick="contactar('Consulta personalizada - No encontré lo que buscaba')" class="btn-personalizado">
                        💬 PREGUNTAR AHORA
                    </button>
                    <p class="mensaje-nota">Estamos para ayudarte a encontrar la fragancia perfecta para ti</p>
                </div>
            </div>
        `;

    contenedor.innerHTML = html;

    console.log(
      `✅ Catálogo ${genero} cargado: ${productosGenero.length} productos`,
    );
  }, 800);
}

// CARGAR AUTOMÁTICAMENTE
document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM cargado");

  const url = window.location.href;

  if (url.includes("hombre")) {
    cargarCatalogo("hombre");
  } else if (url.includes("mujer")) {
    cargarCatalogo("mujer");
  }
});

window.cargarCatalogo = cargarCatalogo;
