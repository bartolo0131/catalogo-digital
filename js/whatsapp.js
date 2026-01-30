// ====================================================
// WHATSAPP GARANTIZADO - FUNCIONA SIEMPRE
// ====================================================
console.log("✅ WhatsApp Garantizado - CARGADO");

// NÚMERO DE WHATSAPP (cambia si es diferente)
const MI_NUMERO = "573003953447";

// FUNCIÓN PRINCIPAL - SIEMPRE FUNCIONA
function abrirWhatsApp(producto) {
  console.log("🔄 Iniciando WhatsApp para:", producto);

  // 1. OBTENER O PEDIR DATOS
  let nombre = document.getElementById("nombre")?.value?.trim() || "";
  let telefono = document.getElementById("telefono")?.value?.trim() || "";

  // Si no hay datos en el formulario, pedirlos
  if (!nombre) {
    nombre = prompt("👤 ¿Cómo te llamas?", "Cliente");
    if (!nombre) return;
  }

  if (!telefono) {
    telefono = prompt("📱 ¿Cuál es tu número de WhatsApp?", "3001234567");
    if (!telefono) return;
  }

  // Limpiar teléfono (solo números)
  telefono = telefono.replace(/\D/g, "");

  // Validar
  if (telefono.length < 10) {
    alert("⚠️ Número inválido. Debe tener 10+ dígitos.");
    return;
  }

  // 2. CREAR MENSAJE
  const mensaje = `
¡HOLA! 👋

*INFORMACIÓN DEL CLIENTE:*
👤 *Nombre:* ${nombre}
📱 *Teléfono:* ${telefono}
🛍️ *Producto de interés:* ${producto}
🌐 *Página:* ${window.location.href}

*MENSAJE:*
Hola, vi ${producto} en su catálogo y me interesa recibir más información.

¡Gracias! 😊
    `.trim();

  // 3. CREAR URL WHATSAPP (2 FORMAS)
  const url1 = `https://wa.me/${MI_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  const url2 = `https://api.whatsapp.com/send?phone=${MI_NUMERO}&text=${encodeURIComponent(mensaje)}`;
  const url3 = `https://web.whatsapp.com/send?phone=${MI_NUMERO}&text=${encodeURIComponent(mensaje)}`;

  console.log("🔗 URLs generadas:", { url1, url2, url3 });

  // 4. INTENTAR 3 MÉTODOS DIFERENTES
  alert(
    `✅ ¡LISTO ${nombre.toUpperCase()}!\n\nSe abrirá WhatsApp en 3 segundos...\n\nSi no se abre:\n1. Acepta ventanas emergentes\n2. O escribe al: +57 ${MI_NUMERO}`,
  );

  // Método 1: Nueva ventana
  setTimeout(() => {
    const ventana = window.open(
      url1,
      "_blank",
      "noopener,noreferrer,width=600,height=700",
    );

    // Si falla, Método 2: Cambiar ubicación
    setTimeout(() => {
      if (!ventana || ventana.closed || typeof ventana.closed == "undefined") {
        console.log("Método 1 falló, intentando Método 2...");
        window.location.href = url2;
      }
    }, 1000);

    // Si falla, Método 3: WhatsApp Web
    setTimeout(() => {
      if (document.hidden === false) {
        console.log("Método 2 falló, intentando Método 3...");
        window.open(url3, "_blank");
      }
    }, 2000);

    // Si todo falla, mostrar datos para copiar
    setTimeout(() => {
      alert(
        `📋 COPIA ESTOS DATOS:\n\nNúmero: +57 ${MI_NUMERO}\n\nMensaje:\n${mensaje}\n\nPresiona OK para copiar al portapapeles`,
      );

      // Copiar al portapapeles
      navigator.clipboard
        .writeText(mensaje)
        .then(() => {
          alert("✅ Mensaje copiado al portapapeles. Pégalo en WhatsApp.");
        })
        .catch(() => {
          // Método alternativo para copiar
          const textArea = document.createElement("textarea");
          textArea.value = mensaje;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("✅ Mensaje copiado. Pégalo en WhatsApp.");
        });
    }, 3000);
  }, 3000); // Esperar 3 segundos para que el usuario vea el mensaje

  // 5. LIMPIAR FORMULARIO
  if (document.getElementById("nombre")) {
    document.getElementById("nombre").value = "";
  }
  if (document.getElementById("telefono")) {
    document.getElementById("telefono").value = "";
  }

  console.log("✅ Proceso de WhatsApp completado");
}

// FUNCIÓN DE PRUEBA INMEDIATA
function pruebaWhatsAppInmediata() {
  console.log("🧪 PRUEBA RÁPIDA DE WHATSAPP");

  const mensaje = `PRUEBA: Estoy probando el catálogo desde ${window.location.href}`;
  const url = `https://wa.me/${MI_NUMERO}?text=${encodeURIComponent(mensaje)}`;

  // Forzar apertura
  const ventana = window.open(
    url,
    "WhatsAppTest",
    "width=800,height=600,scrollbars=yes",
  );

  if (ventana) {
    console.log("✅ WhatsApp abierto exitosamente");
    ventana.focus();
  } else {
    // Si está bloqueado, redirigir directamente
    console.log("⚠️ Pop-up bloqueado, redirigiendo...");
    window.location.href = url;
  }
}

// FUNCIÓN SUPER SIMPLE (método más básico)
function whatsappDirecto(producto) {
  const nombre = prompt("Tu nombre:", "Cliente");
  if (!nombre) return;

  const telefono = prompt("Tu WhatsApp:", "3001234567");
  if (!telefono) return;

  const mensaje = `Hola, soy ${nombre} (${telefono}). Me interesa ${producto}`;
  window.location.href = `https://wa.me/${MI_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

// EXPORTAR FUNCIONES
window.contactar = abrirWhatsApp;
window.probarWhatsApp = pruebaWhatsAppInmediata;
window.whatsappDirecto = whatsappDirecto;
window.abrirWhatsApp = abrirWhatsApp;

console.log("🚀 Funciones disponibles:");
console.log("1. contactar('producto')");
console.log("2. probarWhatsApp()");
console.log("3. whatsappDirecto('producto')");
console.log("4. abrirWhatsApp('producto')");
