// ============================================
// FUNCIÓN SIMPLE PARA WHATSAPP - VERSIÓN LIMPIA
// ============================================

console.log("✅ whatsapp.js cargado - Listo para usar");

function contactar(producto) {
  console.log("🔹 Iniciando contacto para:", producto);

  // 1. OBTENER DATOS DEL FORMULARIO
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  if (!nombreInput || !telefonoInput) {
    alert("⚠️ No se encontró el formulario");
    return;
  }

  const nombre = nombreInput.value.trim();
  const telefono = telefonoInput.value.trim();

  // 2. VALIDAR DATOS
  if (!nombre) {
    alert("📝 Por favor escribe tu nombre");
    nombreInput.focus();
    return;
  }

  if (!telefono) {
    alert("📱 Por favor escribe tu teléfono");
    telefonoInput.focus();
    return;
  }

  // Limpiar teléfono (solo números)
  const telefonoLimpio = telefono.replace(/\D/g, "");
  if (telefonoLimpio.length < 10) {
    alert("❌ Teléfono inválido\n\nDebe tener al menos 10 dígitos");
    telefonoInput.focus();
    telefonoInput.select();
    return;
  }

  // 3. CREAR MENSAJE PARA WHATSAPP
  const telefonoEmpresa = "573003953447"; // Tu número

  let mensaje = `¡Hola! 👋\n\n`;
  mensaje += `*Mi nombre:* ${nombre}\n`;
  mensaje += `*Mi teléfono:* ${telefonoLimpio}\n`;
  mensaje += `*Producto:* ${producto || "Catálogo de perfumes"}\n\n`;
  mensaje += `Me gustaría recibir más información. ¡Gracias! 😊`;

  // 4. CREAR URL DE WHATSAPP
  const urlWhatsApp = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(mensaje)}`;

  console.log("🔗 URL generada:", urlWhatsApp);

  // 5. ABRIR WHATSAPP
  const ventanaWhatsApp = window.open(urlWhatsApp, "_blank");

  // 6. LIMPIAR FORMULARIO
  nombreInput.value = "";
  telefonoInput.value = "";

  // 7. CONFIRMAR AL USUARIO
  if (!ventanaWhatsApp) {
    // Si el navegador bloquea la ventana
    alert(
      "🔓 Tu navegador bloqueó la ventana\n\n✅ Se han limpiado los datos\n📱 Escribe al: +57 300 395 3447",
    );
  } else {
    setTimeout(() => {
      alert(
        `✅ ¡Listo, ${nombre}!\n\nSe abrió WhatsApp con tus datos.\n\nSi no aparece, busca "573003953447" en WhatsApp.`,
      );
    }, 500);
  }

  console.log("✅ Proceso completado");
}

// Hacer función disponible globalmente
window.contactar = contactar;
console.log("🚀 Función 'contactar()' lista para usar");
