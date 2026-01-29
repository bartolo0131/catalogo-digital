async function contactar(producto) {
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");

  if (!nombreInput || !telefonoInput) {
    alert("Error: no se encuentran los campos de nombre o teléfono");
    return;
  }

  const nombre = nombreInput.value.trim();
  const telefonoUser = telefonoInput.value.trim();

  if (nombre === "" || telefonoUser === "") {
    alert("Por favor ingresa tu nombre y teléfono");
    return;
  }

  const genero = document.getElementById("catalogo-hombre")
    ? "hombre"
    : "mujer";

  // 🔹 Guardar en la BD
  await fetch("http://localhost:3000/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre,
      telefono: telefonoUser,
      producto,
      genero,
    }),
  });

  // 🔹 Abrir WhatsApp
  const telefonoEmpresa = "573003953447";
  const mensaje = `Hola, soy ${nombre}. Estoy interesado en tus perfumes. Mi teléfono es ${telefonoUser}`;

  window.open(
    `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );
}
