// ===========================================
// WHATSAPP FUNCIONAL - CATÁLOGO DE PERFUMES
// ===========================================
console.log("✅ WhatsApp.js cargado - Listo para usar");

// Configuración
const NUMERO_WHATSAPP = "573003953447"; // Tu número

// FUNCIÓN PRINCIPAL - ABRE WHATSAPP
function contactar(producto) {
  console.log("📞 Contactando para:", producto);

  // Obtener datos del formulario
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  let nombre = "";
  let telefono = "";

  // Si hay formulario, usar esos datos
  if (nombreInput && telefonoInput) {
    nombre = nombreInput.value.trim();
    telefono = telefonoInput.value.trim();

    if (!nombre || !telefono) {
      alert("📝 Por favor completa tu nombre y teléfono");
      if (!nombre) nombreInput.focus();
      else telefonoInput.focus();
      return;
    }
  } else {
    // Si no hay formulario, pedir datos
    nombre = prompt("👤 ¿Cuál es tu nombre?", "");
    if (!nombre) return;

    telefono = prompt("📱 ¿Cuál es tu número de WhatsApp?", "");
    if (!telefono) return;
  }

  // Limpiar y validar teléfono
  telefono = telefono.replace(/\D/g, "");
  if (telefono.length < 10) {
    alert("⚠️ Teléfono inválido. Debe tener al menos 10 dígitos.");
    if (telefonoInput) telefonoInput.focus();
    return;
  }

  // Crear mensaje profesional
  const mensaje = `¡HOLA! 👋\n\n*INFORMACIÓN DEL CLIENTE:*\n👤 *Nombre:* ${nombre}\n📱 *Teléfono:* ${telefono}\n🛍️ *Producto:* ${producto}\n🌐 *Página:* ${window.location.href}\n\n*MENSAJE:*\nHola, vi "${producto}" en su catálogo online y me gustaría recibir más información sobre disponibilidad y precios.\n\n¡Gracias! 😊`;

  // Crear URL de WhatsApp
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  console.log("🔗 Abriendo WhatsApp:", urlWhatsApp);

  // INTENTO 1: Abrir en nueva ventana
  const nuevaVentana = window.open(urlWhatsApp, "_blank");

  // Si falla, INTENTO 2: Redirección directa después de 1 segundo
  setTimeout(() => {
    if (
      !nuevaVentana ||
      nuevaVentana.closed ||
      typeof nuevaVentana.closed === "undefined"
    ) {
      console.log("⚠️ Ventana bloqueada, redirigiendo...");
      window.location.href = urlWhatsApp;
    }
  }, 1000);

  // Limpiar formulario si existe
  if (nombreInput && telefonoInput) {
    nombreInput.value = "";
    telefonoInput.value = "";
  }

  // Mensaje de confirmación
  setTimeout(() => {
    alert(
      `✅ ¡Perfecto ${nombre}!\n\nSe está abriendo WhatsApp con tus datos.\n\nSi no se abre automáticamente:\n1. Busca este número: +57 ${NUMERO_WHATSAPP}\n2. O escribe manualmente el mensaje.`,
    );
  }, 500);
}

// Hacer función global
window.contactar = contactar;

console.log("🚀 Función 'contactar()' disponible");
