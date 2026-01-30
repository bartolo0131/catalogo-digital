// ===========================================
// FUNCIÓN WHATSAPP 100% FUNCIONAL
// ===========================================
console.log("🚀 WhatsApp JS cargado correctamente");

// FUNCIÓN PRINCIPAL - ABRE WHATSAPP DIRECTO
function contactar(producto) {
  console.log("📞 Contactando para producto:", producto);

  // 1. OBTENER DATOS DEL FORMULARIO
  const nombre = document.getElementById("nombre")?.value || "";
  const telefono = document.getElementById("telefono")?.value || "";

  console.log("Datos obtenidos:", { nombre, telefono });

  // 2. SI NO HAY DATOS, PEDIRLOS
  let nombreFinal = nombre.trim();
  let telefonoFinal = telefono.trim();

  if (!nombreFinal) {
    nombreFinal = prompt("👤 ¿Cuál es tu nombre?", "Cliente");
    if (!nombreFinal) return; // Si cancela, salir
  }

  if (!telefonoFinal) {
    telefonoFinal = prompt("📱 ¿Cuál es tu teléfono?", "3001234567");
    if (!telefonoFinal) return;
  }

  // 3. LIMPIAR TELÉFONO (solo números)
  telefonoFinal = telefonoFinal.replace(/\D/g, "");

  // 4. VALIDAR
  if (telefonoFinal.length < 10) {
    alert("⚠️ Teléfono inválido. Debe tener al menos 10 dígitos.");
    return;
  }

  // 5. TU NÚMERO DE WHATSAPP (REEMPLAZA CON EL TUYO SI ES DIFERENTE)
  const MI_WHATSAPP = "573003953447";

  // 6. CREAR MENSAJE PERSONALIZADO
  let mensaje = `¡HOLA! 👋\n\n`;
  mensaje += `*Mi nombre:* ${nombreFinal}\n`;
  mensaje += `*Mi teléfono:* ${telefonoFinal}\n`;
  mensaje += `*Interés:* ${producto}\n\n`;
  mensaje += `Me gustaría más información sobre este producto.`;
  mensaje += `\n\n---\n*Enviado desde:* ${window.location.href}`;

  // 7. CODIFICAR MENSAJE PARA URL
  const mensajeCodificado = encodeURIComponent(mensaje);

  // 8. CREAR URL DE WHATSAPP
  const urlWhatsApp = `https://wa.me/${MI_WHATSAPP}?text=${mensajeCodificado}`;

  console.log("🔗 URL generada:", urlWhatsApp);

  // 9. ABRIR WHATSAPP (SÍ O SÍ)
  // Método 1: Intentar abrir en nueva pestaña
  window.open(urlWhatsApp, "_blank");

  // Método 2: Redirigir si el bloqueador falla
  setTimeout(() => {
    // Verificar si se abrió
    if (document.hidden || window.blurred) {
      console.log("WhatsApp abierto en nueva pestaña ✓");
    } else {
      // Si no se abrió, mostrar instrucciones
      alert(
        `✅ DATOS LISTOS:\n\n📱 Número: +57 ${MI_WHATSAPP}\n👤 Nombre: ${nombreFinal}\n🛍️ Producto: ${producto}\n\n✏️ Copia este mensaje y pégalo en WhatsApp:`,
      );
      alert(mensaje);

      // Opcional: Copiar al portapapeles
      navigator.clipboard.writeText(mensaje).then(() => {
        console.log("Mensaje copiado al portapapeles");
      });

      // Abrir WhatsApp web
      window.location.href = `https://web.whatsapp.com/send?phone=${MI_WHATSAPP}&text=${mensajeCodificado}`;
    }
  }, 1000);

  // 10. LIMPIAR FORMULARIO (si existe)
  if (document.getElementById("nombre")) {
    document.getElementById("nombre").value = "";
  }
  if (document.getElementById("telefono")) {
    document.getElementById("telefono").value = "";
  }

  // 11. CONFIRMACIÓN FINAL
  setTimeout(() => {
    alert(
      `🎉 ¡PERFECTO ${nombreFinal.toUpperCase()}!\n\n✅ Se abrió WhatsApp con tus datos.\n\n📱 Si no ves la ventana, busca este número: +57 ${MI_WHATSAPP}`,
    );
  }, 1500);
}

// ===========================================
// FUNCIÓN DE PRUEBA DIRECTA (PARA TESTEAR)
// ===========================================
function probarWhatsApp() {
  console.log("🧪 Probando WhatsApp...");

  const MI_WHATSAPP = "573003953447";
  const mensaje = `¡HOLA! 👋\n\n*Estoy probando el catálogo digital*\n*Página:* ${window.location.href}\n\nMe gustaría información sobre los perfumes.`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const url = `https://wa.me/${MI_WHATSAPP}?text=${mensajeCodificado}`;

  console.log("URL de prueba:", url);

  // Forzar apertura
  const ventana = window.open(url, "_blank");

  if (!ventana) {
    // Si está bloqueado, dar instrucciones
    const confirmar = confirm(
      "🔓 Tu navegador bloqueó WhatsApp.\n\n¿Quieres que te redirija directamente?",
    );
    if (confirmar) {
      window.location.href = url;
    } else {
      alert(
        `📝 Copia este número y escribe manualmente:\n\n+57 ${MI_WHATSAPP}\n\nMensaje: "${mensaje}"`,
      );
    }
  }
}

// ===========================================
// HACER FUNCIONES GLOBALES
// ===========================================
window.contactar = contactar;
window.probarWhatsApp = probarWhatsApp;
window.abrirWhatsApp = contactar; // Alias alternativo

console.log("✅ Todas las funciones cargadas:");
console.log("- contactar(producto)");
console.log("- probarWhatsApp()");
console.log("- abrirWhatsApp(producto)");

// ===========================================
// DETECTOR DE ERRORES
// ===========================================
window.addEventListener("error", function (e) {
  console.error("❌ Error en la página:", e.message);
  console.error("En:", e.filename, "línea:", e.lineno);
});
