// URL de la API para producción
const API_URL = "https://catalogo-digital-fu1l.onrender.com/api";

// 🔹 FUNCIÓN COMPLETA (con guardado en BD + WhatsApp)
async function contactar(producto) {
  console.log("Iniciando contacto para producto:", producto);

  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  if (!nombreInput || !telefonoInput) {
    alert("❌ Error: No se encuentran los campos del formulario");
    console.error("Inputs no encontrados");
    return;
  }

  const nombre = nombreInput.value.trim();
  const telefonoUser = telefonoInput.value.trim();

  // Validaciones
  if (nombre === "" || telefonoUser === "") {
    alert("⚠️ Por favor completa todos los campos");
    nombreInput.focus();
    return;
  }

  // Validar teléfono
  const telefonoLimpio = telefonoUser.replace(/\D/g, "");
  if (telefonoLimpio.length < 10) {
    alert(
      "📱 Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)",
    );
    telefonoInput.focus();
    telefonoInput.select();
    return;
  }

  // Detectar género
  let genero = "desconocido";
  const path = window.location.pathname;
  if (path.includes("/hombre")) {
    genero = "hombre";
  } else if (path.includes("/mujer")) {
    genero = "mujer";
  }

  console.log("Datos a enviar:", {
    nombre,
    telefono: telefonoLimpio,
    producto,
    genero,
  });

  // Mostrar loading
  const btnOriginal = document.querySelector('button[onclick*="contactar"]');
  if (btnOriginal) {
    btnOriginal.innerHTML = "⌛ Enviando...";
    btnOriginal.disabled = true;
  }

  try {
    // 🔹 Guardar en la BD
    console.log("Enviando datos al backend...");
    const response = await fetch(`${API_URL}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre,
        telefono: telefonoLimpio,
        producto,
        genero,
      }),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      console.warn(
        "⚠️ No se pudo guardar el lead, pero continuamos con WhatsApp",
      );
    } else {
      console.log("✅ Lead guardado exitosamente");
    }
  } catch (error) {
    console.error("❌ Error al guardar lead:", error);
    // Continuamos aunque falle
  }

  // 🔹 Abrir WhatsApp
  abrirWhatsApp(nombre, telefonoLimpio, producto);

  // Limpiar campos
  nombreInput.value = "";
  telefonoInput.value = "";

  // Restaurar botón
  if (btnOriginal) {
    btnOriginal.innerHTML = "📞 Solicitar información";
    btnOriginal.disabled = false;
  }
}

// 🔹 FUNCIÓN DIRECTA A WHATSAPP (sin guardar en BD)
function contactarDirecto(producto) {
  console.log("Contacto directo para producto:", producto);

  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  // Si hay campos, pedirlos
  if (nombreInput && telefonoInput) {
    const nombre = nombreInput.value.trim();
    const telefonoUser = telefonoInput.value.trim();

    if (nombre === "" || telefonoUser === "") {
      alert("⚠️ Por favor completa tu nombre y teléfono primero");
      nombreInput.focus();
      return;
    }

    const telefonoLimpio = telefonoUser.replace(/\D/g, "");
    if (telefonoLimpio.length < 10) {
      alert("📱 Por favor ingresa un número de teléfono válido");
      telefonoInput.focus();
      return;
    }

    abrirWhatsApp(nombre, telefonoLimpio, producto);
  } else {
    // Si no hay formulario, pedir datos
    const nombre = prompt("👤 Por favor ingresa tu nombre:");
    if (!nombre) return;

    const telefono = prompt("📱 Por favor ingresa tu teléfono:");
    if (!telefono) return;

    const telefonoLimpio = telefono.replace(/\D/g, "");
    if (telefonoLimpio.length < 10) {
      alert("Número de teléfono inválido");
      return;
    }

    abrirWhatsApp(nombre, telefonoLimpio, producto);
  }
}

// 🔹 FUNCIÓN COMÚN PARA ABRIR WHATSAPP
function abrirWhatsApp(nombre, telefono, producto) {
  const telefonoEmpresa = "573003953447";
  const mensaje = `¡Hola! Soy *${nombre}* 📱

🛍️ *Producto de interés:* ${producto}
📞 *Mi teléfono:* ${telefono}

📍 *Página:* ${window.location.href}
⏰ *Fecha:* ${new Date().toLocaleDateString("es-CO")}

¡Me encantaría recibir más información! ✨`;

  console.log("Abriendo WhatsApp...");

  const whatsappUrl = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  // Feedback al usuario
  setTimeout(() => {
    alert(
      `✅ ¡Perfecto, ${nombre}! \n\nSe ha abierto WhatsApp para que te contactes. \n\nSi no se abrió automáticamente, puedes escribir al número: +57 300 395 3447`,
    );
  }, 500);
}

// 🔹 FUNCIÓN PARA CONTACTO GENERAL (desde menú o footer)
function contactarGeneral() {
  const nombre = prompt("👤 ¿Cuál es tu nombre?");
  if (!nombre) return;

  const telefono = prompt("📱 ¿Cuál es tu número de teléfono?");
  if (!telefono) return;

  const telefonoLimpio = telefono.replace(/\D/g, "");
  if (telefonoLimpio.length < 10) {
    alert("Por favor ingresa un número válido (10 dígitos)");
    return;
  }

  const producto =
    prompt("🛍️ ¿En qué producto estás interesado/a? (opcional)") ||
    "Producto general";

  abrirWhatsApp(nombre, telefonoLimpio, producto);
}

// Hacer funciones globales
window.contactar = contactar; // Para botones del catálogo (guarda en BD)
window.contactarDirecto = contactarDirecto; // Para botones directos a WhatsApp
window.contactarGeneral = contactarGeneral; // Para menú/footer
