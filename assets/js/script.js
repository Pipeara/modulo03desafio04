const verCount = document.querySelector("#totalPropiedades");
const casas = document.querySelector(".propiedades");

// Función para mostrar las propiedades en el documento
function showHouse(propiedades) {
  let showCards = '';

  for (let casa of propiedades) {
    // Generar el template HTML para cada propiedad utilizando interpolación
    const template = `
      <div class="propiedad">
        <div class="img" style="background-image: url('${casa.src}')"></div>
        <section>
          <h5>${casa.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${casa.rooms}</p>
            <p>Metros: ${casa.m}</p>
          </div>
          <p class="my-3">${casa.description}</p>
          <button class="btn btn-info">Ver más</button>
        </section>
      </div>`;

    // Agregar el template al conjunto de templates
    showCards += template;
  }

  // Mostrar los templates de propiedades en el documento utilizando innerHTML
  casas.innerHTML = showCards;
}

document.addEventListener('DOMContentLoaded', () => {
   //Mostrar todas las propiedades al cargar la página
  showHouse(propiedades);
  verCount.textContent = propiedades.length;
});

const buscar = document.querySelector(".btn");
buscar.addEventListener('click', () => {
  const cantidadCuartos = document.getElementById('cantidadCuartos').value;
  const metrosDesde = document.getElementById('metrosDesde').value;
  const metrosHasta = document.getElementById('metrosHasta').value;

  // Verificar si hay campos vacíos en el formulario de búsqueda
  if (cantidadCuartos == 0 || metrosDesde == 0 || metrosHasta == 0) {
    alert('Faltan campos por llenar');
    return;
  }

  // Filtrar las propiedades según los criterios de búsqueda
  const propiedadesFiltradas = [];

  // Recorrer el arreglo de propiedades con un ciclo for
  for (let i = 0; i < propiedades.length; i++) {
    const casa = propiedades[i];
    // el valor de m (metros) de la casa actual está entre metrosDesde y metrosHasta.
    // Si la condición es verdadera, significa que la casa cumple con los criterios
    if (cantidadCuartos == casa.rooms && casa.m >= metrosDesde && casa.m <= metrosHasta) {
     
      propiedadesFiltradas[propiedadesFiltradas.length] = casa;
    }
  }

  // Mostrar las propiedades filtradas
  showHouse(propiedadesFiltradas);
  verCount.textContent = propiedadesFiltradas.length;
});
