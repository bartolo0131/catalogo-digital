// whatsapp.js - FUNCIÓN SIMPLE Y FUNCIONAL
console.log("✅ WhatsApp.js cargado");

function contactar(producto) {
  console.log("Contactando para:", producto);

  // Obtener datos del formulario
  const nombre = document.getElementById("nombre")?.value || "";
  const telefono = document.getElementById("telefono")?.value || "";

  // Si no hay datos en el formulario, pedirlos
  let nombreFinal = nombre.trim();
  let telefonoFinal = telefono.trim();

  if (!nombreFinal) {
    nombreFinal = prompt("¿Cuál es tu nombre?", "Cliente");
    if (!nombreFinal) return;
  }

  if (!telefonoFinal) {
    telefonoFinal = prompt("¿Cuál es tu WhatsApp?", "3001234567");
    if (!telefonoFinal) return;
  }

  // Limpiar teléfono
  telefonoFinal = telefonoFinal.replace(/\D/g, "");

  // Validar
  if (telefonoFinal.length < 10) {
    alert("Teléfono inválido. Debe tener al menos 10 dígitos.");
    return;
  }

  // Crear mensaje
  const mensaje = `Hola, soy ${nombreFinal} (${telefonoFinal}). Estoy interesado/a en: ${producto}`;

  // Tu número de WhatsApp
  const numeroWhatsApp = "573003953447";

  // Crear URL
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  console.log("Abriendo WhatsApp:", url);

  // Abrir WhatsApp
  window.open(url, "_blank");

  // Limpiar formulario si existe
  if (document.getElementById("nombre")) {
    document.getElementById("nombre").value = "";
  }
  if (document.getElementById("telefono")) {
    document.getElementById("telefono").value = "";
  }
}

window.contactar = contactar;
