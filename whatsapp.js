// ============================================
// WHATSAPP.JS - VERSIÓN SIMPLE SIN DATOS
// SOLO REDIRIGE CON EL PRODUCTO
// ============================================
console.log("✅ WhatsApp.js cargado - Versión Simple");

// NÚMERO DE WHATSAPP (cámbialo si es diferente)
const NUMERO_WHATSAPP = "573008813801";

// FUNCIÓN PRINCIPAL - SOLO REDIRIGE CON EL PRODUCTO
function contactar(producto) {
  console.log("🚀 Contactando para:", producto);

  // Crear mensaje SOLO con el producto
  const mensaje = `Hola, estoy interesado en: ${producto}`;

  // Crear URL de WhatsApp
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  console.log("🔗 Abriendo WhatsApp con producto:", producto);

  // Abrir WhatsApp directamente
  window.open(urlWhatsApp, "_blank");
}

// Función de prueba simple
function probarWhatsApp() {
  console.log("🧪 Probando WhatsApp...");
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent("Probando el catálogo")}`;
  window.open(url, "_blank");
}

// Exportar funciones
window.contactar = contactar;
window.probarWhatsApp = probarWhatsApp;

console.log("✅ Funciones listas: contactar(producto)");
