// En la función cargarCatalogo, dentro del forEach:
productos.forEach((p) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const nombreSeguro = p.nombre.replace(/'/g, "\\'");

  div.innerHTML = `
    <div class="card-content">
      <h3>${p.nombre}</h3>
      <p class="descripcion">${p.descripcion || "Descripción no disponible"}</p>
      ${p.precio ? `<p class="precio">$${parseFloat(p.precio).toFixed(2)}</p>` : ""}
      
      <div class="card-buttons">
        <button onclick="contactar('${nombreSeguro}')" class="btn-info">
          📝 Solicitar información
        </button>
        
        <button onclick="contactarDirecto('${nombreSeguro}')" class="btn-whatsapp">
          💬 WhatsApp Directo
        </button>
      </div>
    </div>
  `;

  contenedor.appendChild(div);
});
