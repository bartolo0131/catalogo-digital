console.log("catalogo.js cargado");
async function cargarCatalogo(genero) {
  const contenedor = document.getElementById(`catalogo-${genero}`);
  contenedor.innerHTML = "Cargando...";

  const response = await fetch(`http://localhost:3000/api/productos/${genero}`);
  const productos = await response.json();

  contenedor.innerHTML = "";

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <button onclick="contactar('${p.nombre}')">
        Solicitar info
      </button>
    `;

    contenedor.appendChild(div);
  });
}

if (document.getElementById("catalogo-hombre")) {
  cargarCatalogo("hombre");
}

if (document.getElementById("catalogo-mujer")) {
  cargarCatalogo("mujer");
}
