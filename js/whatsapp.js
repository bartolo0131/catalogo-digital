// URL de la API para producción
const API_URL = "https://catalogo-digital-fu1l.onrender.com/api";

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

  // Validar teléfono (solo números, mínimo 10 dígitos)
  const telefonoLimpio = telefonoUser.replace(/\D/g, "");
  if (telefonoLimpio.length < 10) {
    alert(
      "📱 Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)",
    );
    telefonoInput.focus();
    telefonoInput.select();
    return;
  }

  // Detectar género de la página actual
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
      const errorData = await response.text();
      console.warn("⚠️ No se pudo guardar el lead:", errorData);
      // Continuamos aunque falle el guardado
    } else {
      const data = await response.json();
      console.log("✅ Lead guardado:", data);
    }
  } catch (error) {
    console.error("❌ Error al guardar lead:", error);
    // Continuamos aunque falle
  }

  // 🔹 Abrir WhatsApp
  const telefonoEmpresa = "573003953447";
  const mensaje = `¡Hola! Soy *${nombre}* 📱

🛍️ *Producto de interés:* ${producto}
📞 *Mi teléfono:* ${telefonoLimpio}

📍 *Página:* ${window.location.href}
⏰ *Fecha:* ${new Date().toLocaleDateString("es-CO")}

¡Me encantaría recibir más información! ✨`;

  console.log("Abriendo WhatsApp...");

  // Limpiar campos antes de abrir WhatsApp
  nombreInput.value = "";
  telefonoInput.value = "";

  // Restaurar botón
  if (btnOriginal) {
    btnOriginal.innerHTML = "📞 Solicitar información";
    btnOriginal.disabled = false;
  }

  // Abrir WhatsApp en nueva pestaña
  const whatsappUrl = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  // Feedback al usuario
  setTimeout(() => {
    alert(
      `✅ ¡Perfecto, ${nombre}! \n\nSe ha abierto WhatsApp para que te contactes con nosotros. \n\nSi no se abrió automáticamente, puedes escribir al número: +57 300 395 3447`,
    );
  }, 500);
}

// Hacer función global
window.contactar = contactar;
