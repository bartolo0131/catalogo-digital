// ============================================
// WHATSAPP.JS - FUNCIÓN GARANTIZADA
// ============================================
console.log("✅ whatsapp.js cargado");

// TU NÚMERO DE WHATSAPP (sin el +)
const MI_WHATSAPP = "573008813801";

// FUNCIÓN PRINCIPAL - ABRE WHATSAPP REALMENTE
function contactar(producto) {
  console.log("🚀 Ejecutando contactar para:", producto);

  // 1. OBTENER DATOS
  let nombre = document.getElementById("nombre")?.value?.trim() || "";
  let telefono = document.getElementById("telefono")?.value?.trim() || "";

  // 2. SI FALTAN DATOS, PEDIRLOS
  if (!nombre) {
    nombre = prompt("👤 ¿Cuál es tu nombre?", "");
    if (!nombre) return;
  }

  if (!telefono) {
    telefono = prompt("📱 ¿Cuál es tu número de WhatsApp?", "3001234567");
    if (!telefono) return;
  }

  // 3. LIMPIAR TELÉFONO
  telefono = telefono.replace(/\D/g, "");

  // 4. VALIDAR
  if (telefono.length < 10) {
    alert(
      "❌ Teléfono inválido\n\nDebe tener al menos 10 dígitos\nEjemplo: 3001234567",
    );
    return;
  }

  // 5. CREAR MENSAJE
  const mensaje = `¡HOLA! 👋\n\n*Cliente:* ${nombre}\n*Teléfono:* ${telefono}\n*Producto:* ${producto}\n\nQuiero información sobre este producto. ¡Gracias! 😊`;

  // 6. CREAR URL DE WHATSAPP (2 FORMAS)
  const url1 = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  const url2 = `https://api.whatsapp.com/send?phone=${MI_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;

  console.log("🔗 URL generada:", url1);

  // 7. ABRIR WHATSAPP (MÉTODO INFALIBLE)
  // Intentar con window.open primero
  const ventana = window.open(url1, "_blank");

  // Si falla, redirigir directamente
  setTimeout(() => {
    if (!ventana || ventana.closed) {
      console.log("🔄 Método 1 falló, usando método 2...");
      window.location.href = url2;
    }
  }, 500);

  // 8. LIMPIAR FORMULARIO
  if (document.getElementById("nombre")) {
    document.getElementById("nombre").value = "";
  }
  if (document.getElementById("telefono")) {
    document.getElementById("telefono").value = "";
  }

  // 9. CONFIRMACIÓN
  setTimeout(() => {
    alert(
      `✅ ¡LISTO ${nombre.toUpperCase()}!\n\nSe abrió WhatsApp con tus datos.\n\n📱 Número: +57 ${MI_WHATSAPP}\n🛍️ Producto: ${producto}`,
    );
  }, 1000);
}

// FUNCIÓN DE PRUEBA RÁPIDA
function probarWhatsApp() {
  console.log("🧪 Probando WhatsApp...");
  const mensaje = "¡Hola! Estoy probando el catálogo de perfumes";
  const url = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// HACER FUNCIONES GLOBALES
window.contactar = contactar;
window.probarWhatsApp = probarWhatsApp;

console.log("🎯 Funciones disponibles: contactar() y probarWhatsApp()");
